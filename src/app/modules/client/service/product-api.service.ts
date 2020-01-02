import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductDTO} from '../model/product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  findProducts(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>('api/products');
  }
}
