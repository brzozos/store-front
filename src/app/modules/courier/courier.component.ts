import { Component, OnInit } from '@angular/core';
import {OrderApiService} from '../client/service/order-api.service';
import {Observable} from 'rxjs';
import {CourierOrder, CourierOrderDTO} from './model/courier-model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.css']
})
export class CourierComponent implements OnInit {
  orders$: Observable<CourierOrder[]>;
  pickedOrder: CourierOrder = undefined;

  constructor(
    private orderApi: OrderApiService
  ) { }

  ngOnInit() {
    this.orders$ = this.orderApi.findCourierOrders().pipe(
      map(dtos => this.mapOrdersDtosToModels(dtos))
    );
  }

  private mapOrdersDtosToModels(dtos: CourierOrderDTO[]): CourierOrder[] {
    return dtos.map(dto => this.mapOrderDtoToModel(dto));
  }

  private mapOrderDtoToModel(dto: CourierOrderDTO): CourierOrder {
    return {
      created: dto.created,
      id: dto.id,
      route: dto.route,
      status: dto.status,
      totalValue: dto.total_value,
      userAddress: dto.user_address,
      userName: dto.user_name,
      userSurname: dto.user_surname
    };
  }

  orderPicked(order: CourierOrder) {
    this.pickedOrder = order;
  }

  idOrderActive(order: CourierOrder) {
    if (!this.pickedOrder) {
      return false;
    } else {
      return order.id === this.pickedOrder.id;
    }
  }
}
