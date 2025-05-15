export class Stock {
  code: string;
  currentPrice: number;
  quantity: number;

  constructor(code: string, currentPrice: number, quantity: number) {
    this.code = code;
    this.currentPrice = currentPrice;
    this.quantity = quantity;
  }

  totalPrice(): number {
    return this.quantity * this.currentPrice;
  }
}
