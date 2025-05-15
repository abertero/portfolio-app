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


```
npm install
npm run dev
```