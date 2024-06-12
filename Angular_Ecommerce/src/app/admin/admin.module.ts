import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "@services/product.service";
import {ManageProductsModule} from "@app/admin/manage-products/manage-products.module";
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    ManageProductsModule
  ],
  declarations: [AdminComponent],
  providers: [
    ProductService
  ]
})
export class AdminModule { }
