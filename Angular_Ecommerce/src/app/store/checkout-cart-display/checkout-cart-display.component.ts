import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '@app/shared/services/cart.service';
import { ProductService } from '@app/shared/services/product.service';
import { Product } from '@app/shared/models/product';
import { Cart } from '@app/shared/models/cart';
import {ProductImageService} from "@app/shared/services/product-image.service";
import _ from "lodash";
import {Router} from "@angular/router";

@Component({
  selector: 'checkout-cart-display',
  templateUrl: './checkout-cart-display.component.html',
  styleUrls: ['./checkout-cart-display.component.css']
})
export class CheckoutCartDisplayComponent implements OnInit {
  @Input() displayRemove: boolean = true;
  @Input() displayTitle: boolean = true;
  cart: Cart;
  itemsBeingPurchased: Product[];
  thumbnails: Array<any> = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private productImageService: ProductImageService,
    private cartService: CartService
  ) { }

  removeItem(product: Product){
    this.cartService.remove(product);
    this.ngOnInit(); //TODO TEMPORARY FIX
  }
  /**
   * Initialize the cart. Default to having all items in the cart being purchased.
   */
  ngOnInit() {
    this.itemsBeingPurchased = [];
    this.cart = this.cartService.get();
    this.fetchThumbnails();
    this.cart.items.forEach(item => this.itemsBeingPurchased.push(item));
  }

  /**
   * Retrieve product iamge hrefs from api. Stores urls in thumbnail variable.
   * todo: these methods are duplicated between components, clean them up.
   */
  fetchThumbnails(){
    console.log('here');
    let _this = this;
    _.each(this.cart.items, function(product){
      _this.productImageService.getProductImages(product).then(
        (productImageHrefs) => {
          console.log(productImageHrefs);
          _this.thumbnails[product.id] = _this.thumbnails[product.id] || [];
          productImageHrefs.forEach((imageHref) => _this.thumbnails[product.id].push(imageHref));
        });
    });
  }

  /**
   * Returns the thumbnail for the provided product
   * @param product
   * @return false | href
   */
  getThumbnail(product) {
    if(product && this.thumbnails[product.id] && this.thumbnails[product.id][0]){
      return this.thumbnails[product.id][0];
    }else{
      return false;
    }
  }

  redirect(productID){
    console.log('do redirect for '+productID);
    this.router.navigate(['/product',productID]);
  }

  get itemsInCartCount(){
    return (this.cart.items.length)?(this.cart.items.length):(0);
  }

  get itemPurchaseCount(){
    return (this.itemsBeingPurchased.length)?(this.itemsBeingPurchased.length):(0);
  }

  /**
   * Adds product total shipping total and tax totals to return the checkout total
   * @return {number}
   */
  get checkoutTotal(){
    return this.productTotalCost + this.shippingTotalCost + this.taxTotalCost;
  }

  /**
   * Calculates the base price of all of the items selected for purchase
   * @return {number}
   */
  get productTotalCost(){
    let total = 0;
    this.itemsBeingPurchased.forEach(item => total += item.price);
    console.log(total);
    return total;
  }

  /**
   * Calculates the shipping cost for all items being purchased
   * todo: handle shipping calculations and allow for shipping options / pickup
   * @return {number}
   */
  get shippingTotalCost(){
    return 0;
  }

  /**
   * Calculates the total cost of tax for all items being purchased
   * todo: figure out how we are handling taxes
   * @return {number}
   */
  get taxTotalCost(){
    return 0;
  }

}
