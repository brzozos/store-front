import {Component, OnInit} from '@angular/core';
import {Product} from './model/product';
import {ProductApiService} from './service/product-api.service';
import {ProductMapperService} from './service/product-mapper.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {OrderDTO} from './model/order';
import {OrderApiService} from './service/order-api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  products$: Observable<Product[]>;
  totalCost = '0.00';
  order: OrderDTO = {
    products: [],
    user_address: undefined,
    user_name: undefined,
    user_surname: undefined
  };

  constructor(
    private productApi: ProductApiService,
    private productMapper: ProductMapperService,
    private orderApi: OrderApiService,
    private spinner: NgxSpinnerService,
    private toastrService: ToastrService
  ) {
  }

  ngOnInit() {
    this.products$ = this.productApi.findProducts().pipe(
      map(productDto => this.productMapper.convertToModel(productDto))
    );
  }


  countTotalCost(products: Product[]) {
    const countedCost = products
      .filter(p => p.isSelected === true)
      .map(p => p.selectedAmount * p.unitPrice);

    this.totalCost = countedCost.length > 0 ?
      countedCost.reduce((previousValue, currentValue) => previousValue + currentValue)
        .toFixed(2) : '0.00';
    this.totalCost = this.totalCost === 'NaN' ? '0.00' : this.totalCost;
  }

  submitOrder(products: Product[]) {
    this.spinner.show();
    const orderProductDTOS = products
      .filter(p => p.isSelected === true)
      .map(p => this.productMapper.convertProductToOrderProductDto(p));

    this.order.products = orderProductDTOS;
    this.orderApi.submitOrder(this.order)
      .subscribe(
      value => {
        this.spinner.hide();
        this.toastrService.success("ZAMÓWIENIE ZŁOŻONE");
      }
    );
  }

  submitOrderDisabled() {
    return this.totalCost === '0.00'
    || !this.order.user_surname
    || !this.order.user_name
    || !this.order.user_address;
  }
}
