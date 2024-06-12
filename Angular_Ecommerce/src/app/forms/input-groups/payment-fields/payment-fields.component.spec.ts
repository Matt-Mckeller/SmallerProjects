import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFieldsComponent } from './payment-fields.component';

describe('PaymentFieldsComponent', () => {
  let component: PaymentFieldsComponent;
  let fixture: ComponentFixture<PaymentFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
