import {Component, OnInit} from '@angular/core';
import {Product} from './model/product';
import {ProductApiService} from './service/product-api.service';
import {ProductMapperService} from './service/product-mapper.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  products$: Observable<Product[]>;
  totalCost = '0.00';

  constructor(
    private productApi: ProductApiService,
    private productMapper: ProductMapperService
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
}
