import { Address } from '@models/address';
import {ShippingOption} from "@models/shipping-option";
import {Product} from "@models/product";

export class CheckoutModel {
  constructor(
    public shippingAddress: Address = new Address(),
    public phoneNumber: string = null,
    public shippingSelection: ShippingOption = null,
    public stripeToken: string = null,
    public useShippingAddressForBilling: Boolean = true,
    public billingAddress: Address = new Address(),
    public products: Product[] = []
  ) {  }
}