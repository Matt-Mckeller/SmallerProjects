import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutFormComponent } from './checkout-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/shared/material/material.module';
import { TextMaskModule } from 'angular2-text-mask';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddressFieldsComponent } from '@forms/input-groups/address-fields/address-fields.component';
import { PaymentFieldsComponent } from '@forms/input-groups/payment-fields/payment-fields.component';
import { CheckoutService } from "@shared/services/checkout.service";
import { ShippingService } from "@shared/services/shipping.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    TextMaskModule,
    FlexLayoutModule
  ],
  exports: [
    CheckoutFormComponent,
    AddressFieldsComponent,
    PaymentFieldsComponent
  ],
  declarations: [
    CheckoutFormComponent,
    AddressFieldsComponent,
    PaymentFieldsComponent
  ],
  providers: [
    CheckoutService,
    ShippingService
  ]
})
export class CheckoutFormModule { }
