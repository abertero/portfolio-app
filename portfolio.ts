import { amountFormat } from "./amountformat";
import { Stock } from "./stock";

export class Portfolio {
  private stocks: Map<string, Stock>;
  private distribution: Map<string, number>;

  constructor(distribution: Map<string, number> | Record<string, number>) {
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

  validate(): void {
    for (const stock of this.stocks.values()) {
      console.log(stock.describe());
    }
    console.log(
      `The portfolio total amount is $ ${amountFormat(this.totalValue())}`
    );
    if (this.validateDistribution()) {
      console.log("Valid distribution");
    } else {
      console.log("Invalid distribution");
    }
  }

  rebalance(): Portfolio {
    const totalAmount = this.totalValue();
    console.log(`The total amount to balance is $ ${amountFormat(this.totalValue())}`);
    const modifiedPortfolio = new Portfolio(this.distribution);
    for (const [code, distr] of this.distribution.entries()) {
      const amount = totalAmount * distr;
      console.log(
        `The rebalance amount for the ${code} is the ${
          distr * 100
        } % of the total amount: $ ${amountFormat(amount)}`
      );
      const stock = this.stocks.get(code);
      if (stock) {
        const modifiedQuantity = amount / stock.currentPrice;
        console.log(
          `To get the ${amountFormat(
            amount
          )}, the final quantity of ${code} is ${modifiedQuantity}`
        );
        if (modifiedQuantity > stock.quantity) {
          console.log(
            `We have to buy ${modifiedQuantity - stock.quantity} of ${code}`
          );
        } else {
          console.log(
            `We have to sell ${stock.quantity - modifiedQuantity} of ${code}`
          );
        }
        const modifiedStock = new Stock(stock.code, stock.currentPrice, modifiedQuantity);
        modifiedPortfolio.addStock(modifiedStock);
      } else {
        console.log(`No stock found for distribution code ${code}`);
      }
    }
    // lastly we check if there's stock to sell that's not in the distribution
    for (const [code, stock] of this.stocks.entries()) {
        if (!this.distribution.has(code)) {
            console.log(`We have to sell ${stock.quantity} of ${code}`);
        }
    }
    return modifiedPortfolio;
  }

  addStock(stock: Stock): void {
    this.stocks.set(stock.code, stock);
  }

  totalValue(): number {
    let total = 0;
    for (const stock of this.stocks.values()) {
      total += stock.totalPrice();
    }
    return total;
  }
}
