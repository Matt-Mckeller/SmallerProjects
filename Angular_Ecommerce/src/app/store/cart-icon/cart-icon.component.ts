import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../shared/models/cart';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {
  cart: Cart;
  total: Number;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    //Get the users cart
    this.cart = this.cartService.get();
  }

  get itemCount(){
    return this.cart.items.length;
  }

  redirectCart(){
    this.router.navigate(['/cart']);
  }


}
