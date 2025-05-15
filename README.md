# portfolio-app

## Problem

Construct a simple Portfolio class that has a collection of Stocks. Assume each Stock has a “Current Price” method that receives the last available price. Also, the Portfolio class has a collection of “allocated” Stocks that represents the distribution of the Stocks the Portfolio is aiming (i.e. 40% META, 60% APPL)
Provide a portfolio rebalance method to know which Stocks should be sold and which ones should be bought to have a balanced Portfolio based on the portfolio’s allocation.
Add documentation/comments to understand your thinking process and solution

## Assumptions

For this solution:
- I'm creating Portfolio class that has the Stock as a Map (in order to get a specified Stock by using its code). 
- I'm also adding a distribution Map to get the allocated stock distribution by using its code as well.
- I'm using a different data structure to allow the portfolio to have stocks that are not in the distribution, and when the rebalance method is used, most of them should be sold. 
- The case in which a distribution code is not within the stocks is not allowed and should throw an exception (because I don't know the currentPrice).

## Running the code

You need to have node and npm installed, then execute:

```
npm install
npm run dev
```

## Explanation

In portfolio there are the following methods:

- `validateDistribution`: Allows to check if the distribution map has values that sum 1. If so, the method response is true.
- `validate`: Iterates over the stock elements and prints information about them, the quantity and the total money in that stock. Finishes checking if the portfolio distribution is valid. Prints that information to console.log
- `rebalance`: Has the logic that rebalances the portfolio according to the distribution, to do that, we:
  - first check the total amount in the portfolio
  - then distributes that money according to the distribution map
  - and then, iterates over the same distribution map to get the final quantity of stocks that needs to have to fill the distribution
    - if the final quantity is greater than the original, we must buy, we send the difference to console.log
    - if the final quantity is less than the original, we must sell, we send the difference to console.log
  - finally we iterate over the stock map to check stocks that are not in the distribution, and send the information that we must sell them to the console.log

In the main file there are three cases:
-  The first one contains two stocks and their distribution, and outputs the rebalanced quantity to sell or buy for each stock
-  The second one has a third stock that is not in the distribution, and outputs the rebalanced quantity, and to sell of of that stock
-  The third one has fewer stocks that are not in the distribution, and we output an error, because we don't have the stock price to see how much do we need to buy 
