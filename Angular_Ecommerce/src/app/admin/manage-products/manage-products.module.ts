import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {TextMaskModule} from "angular2-text-mask";
import {MaterialModule} from "@app/shared/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ManageProductsComponent} from "@app/admin/manage-products/manage-products.component";
import { SaveProductComponent } from './save-product/save-product.component';
import {FileUploadModule} from "ng2-file-upload";
import {ManageProductsRoutingModule} from "@app/admin/manage-products/manage-products-routing.module";
import { CurrentImagesComponent } from './save-product/current-images/current-images.component';
import {CKEditorModule} from "ng2-ckeditor";
import { ProductDescriptionEditorComponent } from './save-product/description/product-description-editor.component';
import {EcommerceModule} from "@store/ecommerce.module";
import { RemoveImageFabComponent } from './save-product/current-images/remove-image-fab/remove-image-fab.component';
import { RemoveImageDialogComponent } from './save-product/current-images/remove-image-dialog/remove-image-dialog.component';
import { DeleteProductButtonComponent } from './delete-product-button/delete-product-button.component';
import { DeleteProductDialogComponent } from './delete-product-dialog/delete-product-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    TextMaskModule,
    FlexLayoutModule,
    FileUploadModule,
    EcommerceModule,
    ManageProductsRoutingModule,
    FormsModule,
    CKEditorModule
  ],
  exports: [
    ManageProductsComponent
  ],
  declarations: [
    ManageProductsComponent,
    SaveProductComponent,
    CurrentImagesComponent,
    ProductDescriptionEditorComponent,
    RemoveImageFabComponent,
    RemoveImageDialogComponent,
    DeleteProductButtonComponent,
    DeleteProductDialogComponent,
  ]
})
export class ManageProductsModule { }
