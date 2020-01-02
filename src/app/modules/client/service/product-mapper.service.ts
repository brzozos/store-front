import {Injectable} from '@angular/core';
import {Product, ProductDTO} from '../model/product';
import {OrderProductDTO} from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class ProductMapperService {

  convertToModel(productDto: ProductDTO[]): Product[] {
    return productDto.map(dto => this.convertProductToModel(dto));
  }

  private convertProductToModel(dto: ProductDTO): Product {
    return {
      id: dto.id,
      amount: dto.amount,
      name: dto.name,
      unitPrice: dto.unit_price,
      selectedAmount: 1,
      isSelected: false
    };
  }

  convertProductToOrderProductDto(p: Product): OrderProductDTO {
    return {
      amount: p.selectedAmount,
      name: p.name
    };
  }
}
