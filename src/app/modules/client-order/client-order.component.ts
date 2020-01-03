import { Component, OnInit } from '@angular/core';
import {OrderApiService} from '../client/service/order-api.service';
import {Observable} from 'rxjs';
import {ClientOrder} from '../client/model/order';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {OrderMapperService} from '../client/service/order-mapper.service';

@Component({
  selector: 'app-client-order',
  templateUrl: './client-order.component.html',
  styleUrls: ['./client-order.component.css']
})
export class ClientOrderComponent implements OnInit {
  order$: Observable<ClientOrder>;

  constructor(
    private orderApi: OrderApiService,
    private orderMapper: OrderMapperService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.order$ = this.orderApi.findOrderById(params.id)
        .pipe(
          map(dto => this.orderMapper.mapDtoToModel(dto))
        );
    });
  }

}
