import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCartDisplayComponent } from './checkout-cart-display.component';

describe('CheckoutCartDisplayComponent', () => {
  let component: CheckoutCartDisplayComponent;
  let fixture: ComponentFixture<CheckoutCartDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutCartDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCartDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
