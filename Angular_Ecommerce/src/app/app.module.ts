import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '@shared/material/material.module';
import { EcommerceModule } from '@store/ecommerce.module';

import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { SidenavComponent } from '@app/sidenav/sidenav.component';
import { SideNavService } from './side-nav.service';
import { HomeComponent } from '@pages/home/home.component';
import { AboutComponent } from '@pages/about/about.component';
import { VintageComponent } from '@pages/vintage/vintage.component';
import { CheckoutComponent } from '@pages/checkout/checkout.component';
import { CheckoutFormModule } from '@forms/checkout-form/checkout-form.module';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MyCartComponent } from '@pages/my-cart/my-cart.component';
import {FileUploadModule} from "ng2-file-upload";
import {AdminModule} from "@app/admin/admin.module";
import {ProductImageService} from "@app/shared/services/product-image.service";
import {ImagePipeModule} from "@app/shared/pipes/images/image-pipe.module";
import {RemoveImageDialogComponent} from "@app/admin/manage-products/save-product/current-images/remove-image-dialog/remove-image-dialog.component";
import {DeleteProductDialogComponent} from "@app/admin/manage-products/delete-product-dialog/delete-product-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MainFooterComponent,
    SidenavComponent,
    HomeComponent,
    AboutComponent,
    VintageComponent,
    CheckoutComponent,
    MyCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    EcommerceModule,
    CheckoutFormModule,
    FileUploadModule,
    ImagePipeModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [
    SideNavService,
    ProductImageService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    RemoveImageDialogComponent,
    DeleteProductDialogComponent
  ]
})
export class AppModule {}
