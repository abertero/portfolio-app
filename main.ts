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

function secondCase() {
    const stock1 = new Stock("APPL", 1500, 200);
    const stock2 = new Stock("META", 2500, 400);
    const stock3 = new Stock("GOGL", 4000, 100);
    

    const portfolio = new Portfolio({
        "APPL": 0.4,
        "META": 0.6,
    });

    portfolio.addStock(stock1);
    portfolio.addStock(stock2);
    portfolio.addStock(stock3);

    portfolio.validate();

    portfolio.rebalance();
}

function thirdCase() {
    const stock1 = new Stock("APPL", 1500, 200);
    const stock2 = new Stock("META", 2500, 400);
    const stock3 = new Stock("GOGL", 4000, 100);
    

    const portfolio = new Portfolio({
        "APPL": 0.4,
        "FINT": 0.6,
    });

    portfolio.addStock(stock1);
    portfolio.addStock(stock2);
    portfolio.addStock(stock3);

    portfolio.validate();

    portfolio.rebalance();
}


console.log(`First case: APPL and META 40/60 with stocks`)
firstCase();
console.log(`End of first case\n\n`)

console.log(`Second case: APPL and META 40/60 with stocks and GOGL stocks that are not in the distribution`)
secondCase();
console.log(`End of second case\n\n`)

console.log(`Third case: APPL and FINT 40/60, we don't have FINT stocks so the logic must show an error`)
thirdCase();
console.log(`End of third case\n\n`)