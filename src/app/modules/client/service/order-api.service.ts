import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrderDTO} from '../model/order';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  submitOrder(orderDTO: OrderDTO): Observable<string> {
    return this.http.post<string>('api/order', orderDTO, {});
  }
}
