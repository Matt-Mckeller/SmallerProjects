import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {MatPaginator} from "@angular/material";
import 'rxjs/add/observable/of';
import "rxjs/add/operator/map";
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {ProductDatabase} from "@app/data/product/product-database";
import {Product} from "@models/product";

export class ProductDataSource extends DataSource<any> {
  constructor(
    private _database: ProductDatabase,
    private _paginator: MatPaginator) {
    super();
  }

  connect(): Observable<Product[]> {
    // Define factors that influence a display change
    const displayDataChanges = [
      this._database.dataChange,
      this._paginator.page
    ];
    return Observable.merge(...displayDataChanges).map(() => {
      console.log('detected change');
      const data = this._database.data.slice();
      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}
