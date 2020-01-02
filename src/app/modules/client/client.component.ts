import { Component, OnInit } from '@angular/core';
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

  constructor(
    private productApi: ProductApiService,
    private productMapper: ProductMapperService
  ) { }

  ngOnInit() {
    this.products$ = this.productApi.findProducts().pipe(
      map(productDto => this.productMapper.convertToModel(productDto))
    );
  }

}
