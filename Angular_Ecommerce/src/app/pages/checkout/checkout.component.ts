import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CartService } from '@services/cart.service';
import { ProductService } from '@services/product.service';
import { Product } from '@models/product';
import { Cart } from '@models/cart';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

// todo create checkout module
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: Cart;
  itemsBeingPurchased: Product[];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    public snackBar: MatSnackBar,
    private location: Location
  ) { }

  /**
   * Initialize the cart. Default to having all items in the cart being purchased.
   */
  ngOnInit() {
    this.checkIfEmpty()
    this.itemsBeingPurchased = [];
    this.cart = this.cartService.get();
    this.cart.items.forEach(item => this.itemsBeingPurchased.push(item));
  }

  checkIfEmpty() {
    if (this.cartService.isEmpty()) {
      this.snackBar.open('There are no items in your cart.', 'Ok', {
        duration: 5000,
        verticalPosition: 'top'
      });
      this.location.back();
    }
  }

}
