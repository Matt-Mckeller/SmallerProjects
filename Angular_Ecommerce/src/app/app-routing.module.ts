import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@pages/home/home.component';
import { AboutComponent } from '@pages/about/about.component';
import { VintageComponent } from '@pages/vintage/vintage.component';
import { CheckoutComponent } from '@pages/checkout/checkout.component';
import { ProductComponent } from '@store/product/product.component';
import {MyCartComponent} from "@app/pages/my-cart/my-cart.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'vintage',  component: VintageComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'cart', component: MyCartComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
