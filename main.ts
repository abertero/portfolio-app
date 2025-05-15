import { Portfolio } from "./portfolio";
import { Stock } from "./stock";

function firstCase() {
    const stock1 = new Stock("APPL", 1500, 200);
    const stock2 = new Stock("META", 2500, 400);

    const portfolio = new Portfolio({
        "APPL": 0.4,
        "META": 0.6,
    });

    portfolio.addStock(stock1);
    portfolio.addStock(stock2);

    portfolio.validate();

    portfolio.rebalance();
}


firstCase();