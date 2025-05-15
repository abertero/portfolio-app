import { amountFormat } from "./amountformat";

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

  describe(): string {
    return `For the stock ${this.code}, there are ${
      this.quantity
    } stocks, at price: $ ${amountFormat(
      this.currentPrice
    )}. The total amount is $ ${amountFormat(this.totalPrice())}`;
  }
}
