import { Product } from './product';

export class Cart {
    id: number;
    items: Array<Product>;
    itemsTotal?: Number;
    // customer: Customer;
}