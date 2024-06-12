import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { CardPaymentMethod } from '@models/card-payment-method';
import {CustomValidators} from "ng2-validation";

@Component({
  selector: 'app-payment-fields',
  templateUrl: './payment-fields.component.html',
  styleUrls: ['./payment-fields.component.css']
})
export class PaymentFieldsComponent implements OnInit {
  @Input() model: CardPaymentMethod;
  form: FormGroup;
  expirationMonths = [
    {'viewValue': '01 January', 'value': '1'},
    {'viewValue': '02 February', 'value': '2'},
    {'viewValue': '03 March', 'value': '3'},
    {'viewValue': '04 April', 'value': '4'},
    {'viewValue': '05 May', 'value': '5'},
    {'viewValue': '06 June', 'value': '6'},
    {'viewValue': '07 July', 'value': '7'},
    {'viewValue': '08 August', 'value': '8'},
    {'viewValue': '09 September', 'value': '9'},
    {'viewValue': '10 November', 'value': '10'},
    {'viewValue': '11 October', 'value': '11'},
    {'viewValue': '12 December', 'value': '12'}
  ];
  expirationYears = [
    2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030
  ];

  constructor() {}

  ngOnInit() {
    if (this.model === undefined) {
      this.model = new CardPaymentMethod();
    }

    this.form = new FormGroup({
      'cardNumber': new FormControl(this.model.cardNumber, [
        Validators.required,
        CustomValidators.creditCard
      ]),
      'cardExpirationMonth': new FormControl(this.model.cardExpirationMonth, [
        Validators.required
      ]),
      'cardExpirationYear': new FormControl(this.model.cardExpirationYear, [
        Validators.required
      ]),
      'cardSecurityCode': new FormControl(this.model.cardSecurityCode, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(4),
        CustomValidators.digits
      ])
    });
  }


  get cardNumber() { return this.form.get('cardNumber'); }
  get cardExpirationMonth() { return this.form.get('cardExpirationMonth'); }
  get cardExpirationYear() { return this.form.get('cardExpirationYear'); }
  get cardSecurityCode() { return this.form.get('cardSecurityCode'); }
}
