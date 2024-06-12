export class CardPaymentMethod {
  constructor(
    public cardNumber: number = null,
    public cardExpirationMonth: string = null,
    public cardExpirationYear: string = null,
    public cardSecurityCode: string = null
  ) {}
}