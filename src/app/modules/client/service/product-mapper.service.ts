import { Injectable } from '@angular/core';
import {Product, ProductDTO} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductMapperService {

  convertToModel(productDto: ProductDTO[]): Product[] {
    return productDto.map(
      dto =>  <Product> {
        id: dto.id,
        amount: dto.amount,
        name: dto.name,
        unitPrice: dto.unitPrice
      }
    );
  }
}
