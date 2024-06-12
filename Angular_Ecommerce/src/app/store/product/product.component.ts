import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from '@services/cart.service';
import { Product } from '@models/product';
import _ from "lodash";

import 'rxjs/add/operator/switchMap';
import {Observable} from "rxjs/Observable";

import { ProductService } from '@services/product.service';
import {Breakpoints, BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  finishedLoading = false;
  productObservable: Observable<Product>;
  product: Product;
  hasBeenAdded: boolean = false;

  totalCols = "12";
  sliderCols = "6";
  detailsCols = "6";
  detailsRows = "2";


  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  addToCart(){
    this.hasBeenAdded = true;
    console.log('Add ' + this.product + ' to cart!');
    this.cartService.add(this.product);
    console.log(this.cartService.get());
  }

  buy(){
    console.log('Checkout '+this.product+'now!');
    //If item has not already been added add it to cart
    if(this.hasBeenAdded === false){
      this.addToCart();
    }
    this.redirectCart();
  }

  redirectCart(){
    this.router.navigate(['/cart']);
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productService.getById(+params.get('id')))
      .subscribe(product => {
        this.product = product;
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
    this.totalCols = "12";
    this.sliderCols = "12";
    this.detailsCols = "12";
    this.detailsRows = "1";
  }
  tabletLayout(){
    this.totalCols = "12";
    this.sliderCols = "12";
    this.detailsCols = "12";
    this.detailsRows = "2";
  }
  webLayout(){
    this.totalCols = "12";
    this.sliderCols = "6";
    this.detailsCols = "6";
    this.detailsRows = "2";
  }
}
