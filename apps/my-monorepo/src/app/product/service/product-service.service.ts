import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  url = 'https://fakestoreapi.com/products/';
 protected http = inject(HttpClient);

  getProducts() {
    return this.http.get<IProduct[]>(this.url);
  }
  getProductDetails(id:string) {
    return this.http.get<IProduct>(this.url+id);
  }
}
