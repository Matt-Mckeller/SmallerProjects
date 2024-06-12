import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ManageProductsComponent} from "@app/admin/manage-products/manage-products.component";
import {SaveProductComponent} from "@app/admin/manage-products/save-product/save-product.component";

const routes: Routes = [
  { path: 'admin/manage-products/product/:id',  component: SaveProductComponent },
  { path: 'admin/manage-products/product',  component: SaveProductComponent },
  { path: 'admin/manage-products',  component: ManageProductsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ManageProductsRoutingModule {}
