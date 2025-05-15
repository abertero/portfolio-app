import { Stock } from "./stock";

export class Portfolio {
  private stocks: Map<string, Stock>;
  private distribution: Map<string, number>;

  constructor(distribution: Record<string, number>) {
    this.stocks = new Map<string, Stock>();
    this.distribution = new Map<string, number>(Object.entries(distribution));
  }

  validateDistribution(): boolean {
    let sum = 0;
    for (const distributionNumber of this.distribution.values()) {
        sum += distributionNumber;
    }
    return sum === 1;
  }

  addStock(stock: Stock): void {
    this.stocks.set(stock.code, stock);
  }

  removeStock(code: string): void {
    this.stocks.delete(code);
  }

  getStock(code: string): Stock | undefined {
    return this.stocks.get(code);
  }

  totalValue(): number {
    let total = 0;
    for (const stock of this.stocks.values()) {
      total += stock.totalPrice();
    }
    return total;
  }
}
