import {Injectable} from '@angular/core';
import {ClientOrder, ClientOrderDTO} from '../model/order';
import {ClientProduct, ClientProductDTO} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class OrderMapperService {

  constructor() {
  }


  mapDtoToModel(dto: ClientOrderDTO): ClientOrder {
    return {
      created: dto.created,
      id: dto.id,
      totalValue: dto.total_value,
      userAddress: dto.user_address,
      userName: dto.user_name,
      userSurname: dto.user_surname,
      products: dto.products.map(p => this.mapProductDotToModel(p))
    };

  }

  private mapProductDotToModel(dto: ClientProductDTO): ClientProduct {
    return {
      amount: dto.amount,
      name: dto.name,
      unit_price: dto.unit_price
    };
  }
}
