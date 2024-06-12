import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CheckoutModel} from "@models/checkout";
import { environment } from '@environment';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CheckoutService {

  constructor(
    private http: HttpClient
  ) { }

  submit(checkoutData: CheckoutModel): Promise<any> {
    let url = environment.API_BASEURL + 'checkout/submit';
    return this.http.post(url, checkoutData).toPromise();
  }

  save(checkoutData: CheckoutModel) {
    console.log('submit from service');
    console.log(checkoutData);
  }

}
