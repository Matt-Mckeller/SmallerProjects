import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@shared/models/product';
import { ProductService } from '@shared/services/product.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  colCount = "12";
  rowHeight = "400px";
  imageHeight = "400px";


  constructor(
    private productService: ProductService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) { }

  /**
   * Retrieve the products to be displayed.
   */
  ngOnInit() {
    this.productService.get().toPromise().then(
      (products) => {
        this.products = products;
      });

    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result=>{
      if(result.matches){
        this.phoneLayout();
      }
    });
    this.breakpointObserver.observe([
      Breakpoints.TabletPortrait
    ]).subscribe(result=>{
      if(result.matches){
        this.tabletLayout();
      }
    });
    this.breakpointObserver.observe([
      Breakpoints.WebPortrait
    ]).subscribe(result=>{
      if(result.matches){
        this.webLayout();
      }
    });

  }

  phoneLayout(){
    this.colCount = "3";
    this.rowHeight = "300px";
    this.imageHeight = "150px";
  }
  tabletLayout(){
    this.colCount = "6";
    this.rowHeight = "300px";
    this.imageHeight = "200px";
  }
  webLayout(){
    this.colCount = "12";
    this.rowHeight = "400px";
    this.imageHeight = "300px";
  }
  redirect(productID){
    this.router.navigate(['/product', productID]);
  }

}
