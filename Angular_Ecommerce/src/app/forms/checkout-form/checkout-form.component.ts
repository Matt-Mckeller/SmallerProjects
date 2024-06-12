import { Component, OnInit, DoCheck } from '@angular/core';
import { environment } from '@environment';
import { CheckoutModel } from '@app/shared/models/checkout';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {CardPaymentMethod} from "@app/shared/models/card-payment-method";
import {Address} from "@app/shared/models/address";
import {CartService} from "@app/shared/services/cart.service";
import {Product} from "@app/shared/models/product";
import {Cart} from "@app/shared/models/cart";
import {ShippingOption} from "@app/shared/models/shipping-option";
import { CustomValidators } from 'ng2-validation';

import _ from "lodash";
import { Observable }        from 'rxjs/Observable';

import {HttpClient} from "@angular/common/http";
import {CheckoutService} from "@services/checkout.service";
import {ShippingService} from "@app/shared/services/shipping.service";
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit, DoCheck {
  step = 0;
  phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  submitted = false;
  stripe = {
    style: null,
    card: null,
    instance: null
  };

  model: CheckoutModel;
  checkoutForm: FormGroup;
  shippingAddressModel: Address;
  billingAddressModel: Address;
  cart: Cart;

  shippingOptions: Observable<ShippingOption[]>;

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private shippingService: ShippingService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  save() {
    this.checkoutService.save(this.model);
  }

  onSubmit() {
    this.submitted = true;
    this.stripe.instance.createToken(this.stripe.card, this.extraStripeInformation()).then((result) => {
      if (result.error) {
        // Inform the user if there was an error
        let errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        // Send the token to your server
        this.model.stripeToken = result.token.id;
        this.checkoutService.submit(this.model).then(
          () => {
            this.snackBar.open('Your order has been successfully placed!', 'Ok', {
              duration: 30000,
              verticalPosition: 'top'
            });
            this.router.navigate(['/home']);
          },
          (e) => {
            alert('An error has occurred.');
            console.log(e);
          }
        );
      }
    });
  }

  ngOnInit() {
    this.setupStripe();
    this.model = new CheckoutModel();
    this.shippingAddressModel = new Address();
    this.billingAddressModel = new Address();

    this.checkoutForm = new FormGroup({
      'phoneNumber': new FormControl(this.sanitizedPhoneNumber, [
        Validators.required,
        CustomValidators.phone('US')
      ]),
      'shippingSelection': new FormControl(this.model.shippingSelection, [
        Validators.required
      ]),
      'useShippingAddressForBilling': new FormControl(this.model.useShippingAddressForBilling, [
      ])
    });

    this.shippingOptions = this.shippingService.get();

    this.model.products = [];
    this.cart = this.cartService.get();
    this.cart.items.forEach(item => this.model.products.push(item));
  }

  ngDoCheck() {
    // let _this = this;
    this.synchronizeModels(this.shippingAddressModel, this.model.shippingAddress);
    this.synchronizeModels(this.billingAddressModel, this.model.billingAddress);

  }

  setupStripe(){
    // Create a Stripe client
    this.stripe.instance = (<any>window).Stripe(environment.stripeKey);
    this.stripe.style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };
    let elements = this.stripe.instance.elements();
    this.stripe.card = elements.create('card', {style: this.stripe.style});
    this.stripe.card.mount('#card-element');

    // Handle real-time validation errors from the card Element.
    this.stripe.card.addEventListener('change', function(event) {
      let displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });
  }

  synchronizeModels(fromModel, toModel) {
    let changes = _.reduce(fromModel, function(result, value, key){
      if (! _.isEqual(value, toModel[key])) {
        (result[key] || (result[key] = [])).push(value);
      }
      return result;
    }, {});

    _.each(changes, (value, key) => {
      toModel[key] = fromModel[key];
    });
  }

  extraStripeInformation() {
    let addressModelReference = (this.model.useShippingAddressForBilling) ?
      (this.model.shippingAddress) : (this.model.billingAddress);
    return {
      name: addressModelReference.firstName + ' ' + addressModelReference.lastName,
      address_line1: addressModelReference.address1,
      address_line2: addressModelReference.address2,
      address_city: addressModelReference.city,
      address_state: addressModelReference.state,
      address_zip: addressModelReference.zip
    };
  }

  setStep(stepNumber: number){
    this.step = stepNumber;
  }

  prevStep(){
    this.setStep(this.step - 1);
    this.save();
  }

  nextStep(){
    this.setStep(this.step + 1);
    this.save();
  }


  /**
   * Using custom getter and setter for phone number
   *  field to allow for input masking
   * @return {string}
   */
  get sanitizedPhoneNumber() {
    return this.model.phoneNumber;
  }
  /**
   * Using custom getter and setter for phone number
   *  field to allow for input masking
   * @return {string}
   */
  set sanitizedPhoneNumber(phoneNumberVal){
    if(phoneNumberVal){
      //Replace all mask characters (i.e. non decimals)
      phoneNumberVal = phoneNumberVal.replace(/\D+/g, '');
    }
    this.model.phoneNumber = phoneNumberVal;
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
    this.model.products.forEach(item => total += item.price);
    return total;
  }

  /**
   * Calculates the shipping cost for all items being purchased
   * todo: handle shipping calculations and allow for shipping options / pickup
   * @return {number}
   */
  get shippingTotalCost(): number{
    return (this.shippingSelection.value) ?
      (this.shippingSelection.value.cost) : (0);
  }

  /**
   * Calculates the total cost of tax for all items being purchased
   * todo: figure out how we are handling taxes
   * @return {number}
   */
  get taxTotalCost(){
    return 0.00;
  }


  get phoneNumber() { return this.checkoutForm.get('phoneNumber'); }
  get shippingSelection() { return this.checkoutForm.get('shippingSelection'); }
  get useShippingAddressForBilling() { return this.checkoutForm.get('useShippingAddressForBilling'); }

}
