import { Component, OnInit } from '@angular/core';
import {ProductService} from "@app/shared/services/product.service";
import {Product} from "@app/shared/models/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    products: Array<Product>;

    constructor(
      private productService: ProductService
    ){

    }
    ngOnInit() {
      this.products = [];
      this.fetchFrontPageProducts();
    }

  fetchFrontPageProducts() {
        this.productService.getById(13).subscribe(
          (product)=>this.products.push(product)
        );
        this.productService.getById(14).subscribe(
          (product)=>this.products.push(product)
        );
    }


}
