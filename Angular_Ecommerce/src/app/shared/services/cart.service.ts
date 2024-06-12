import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Cart } from '../models/cart';

@Injectable()
export class CartService {
  private cart: Cart;

  constructor() {
    //Instantiate the cart to be empty
    this.cart = {
      id: Math.ceil((Math.random()*100)),
      items: [] as Product[]
    } as Cart;
  }

  /**
   * Adds 1 product to the cart
   * @param product
   */
  add(product: Product){
    console.log('attempt to add product');
    this.cart.items.push(product);
  }

  /**
   * Removes 1 of the specified items from the cart.
   * @param product
   * @param count
   */
  remove(product: Product, count: number = 1){
    console.log('Attempt to remove product');
    //todo may need to update to use find exact item / move find exact onto the product model
    let removedCount = 0;
    this.cart.items = this.cart.items.filter(item => {
      let match = (product.id === item.id);
      if(match){removedCount++}
      return !(match && removedCount<=count);
    });
  }

  /**
   * Empties the users cart
   */
  empty() {
    this.cart.items.forEach((item)=> this.remove(item));
  }

  /**
   * Checks to see if the users cart is empty.
   * @returns {boolean}
   */
  isEmpty() {
    return !(this.cart.items.length > 0);
  }

  /**
   * Get all products in the cart.
   * @return {Cart}
   */
  get(): Cart{
    console.log('Attempt to retrieve cart');
    //todo create a real cart object somewhere and have a computed property...
    // Not sure if this should be a component yet or not
    let total = 0;
    this.cart.items.forEach((item)=>(total += item.price));
    this.cart.itemsTotal = total;
    return this.cart;
  }

  /**
   * Searches for the exact match of the provided item in the cart and returns it.
   * @param product
   * @return Product | False
   */
  findExact(product: Product): Product | false{
    let foundItem = this.get().items.filter(item => product.id == item.id);
    if(foundItem.length){
      return foundItem[0];
    }else{
      return false;
    }
  }
}
