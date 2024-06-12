/** An example database that the data source uses to retrieve data for the table. */

import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Product} from "@models/product";
import {ProductService} from "@services/product.service";

export class ProductDatabase{
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  get data(): Product[] { return this.dataChange.value; }

  constructor(
    private productService: ProductService
  ) {
    this._getProducts();
  }

  /** Adds a new user to the database. */
  addProduct(product) {
    const copiedData = this.data.slice();
    copiedData.push(product);
    this.dataChange.next(copiedData);
  }

  refresh() {
    this.dataChange.next([]);
    this._getProducts();
  }

  private _getProducts() {
    this.productService.get().toPromise().then(
      (products) => {
        products.forEach((product) => this.addProduct(product));
        // this.fetchThumbnails();
      });
  }

}