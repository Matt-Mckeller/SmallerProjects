import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '@models/product';
import {ProductService} from '@services/product.service';
import {ProductImageService} from '@services/product-image.service';
import _ from 'lodash';
import 'rxjs/add/operator/toPromise';
import {MatPaginator} from '@angular/material';
import {ProductDatabase} from '@app/data/product/product-database';
import {ProductDataSource} from '@app/data/product/product-data-source';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  displayedColumns = ['id', 'name', 'price', 'thumbnail', 'delete'];
  productDataSource: ProductDataSource | null;
  productDatabase: ProductDatabase;
  //References first element or directive matching MatPaginator
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private productService: ProductService,
    private productImageService: ProductImageService
  ) { }

  // /**
  //  * Retrieve the products to be displayed.
  //  */
  ngOnInit() {
    this.productDatabase = new ProductDatabase(this.productService);
    this.productDataSource = new ProductDataSource(this.productDatabase, this.paginator);
  }

}
