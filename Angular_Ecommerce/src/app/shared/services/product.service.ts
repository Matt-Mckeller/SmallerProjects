import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import _ from 'lodash';
import { environment } from '@environment';

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<Product[]> {
    const url = environment.API_BASEURL + 'products/getProducts';
    return this.http.get<Product[]>(url);
  }

  getById(id: any): Observable<Product> {
    const url = environment.API_BASEURL + 'products/getProduct/' + id;
    return this.http.get<Product>(url);
  }

  search(attributes: any[], tags: any[], priceMin: number, priceMax: number) {

  }

  create(productData: Product) {
    const url = environment.API_BASEURL + 'products/createProduct';
    this.http.post(url, {product: productData})
      .subscribe(
        this.nextHandler,
        this.errorHandler
      );
  }

  update(productData: Product) {
    const url = environment.API_BASEURL + 'products/editProduct/' + productData.id;
    this.http.post(url, {product: productData})
      .subscribe(
        this.nextHandler,
        this.errorHandler
      );
  }

  deleteProduct(productData: Product) {
    const url = environment.API_BASEURL + 'products/removeProduct/' + productData.id;
    return this.http.delete(url);
  }

  nextHandler(successData) {
    console.log(successData);
  }

  errorHandler(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      // A client-side or network error occurred.
      console.log('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
    }
  }
}
