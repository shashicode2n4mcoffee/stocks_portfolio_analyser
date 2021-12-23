import React from "react";
import "./Stocks.css";

const Stocks = ({ stockList }) => {
  return (
    <div className="stocks">
      <h3>Stocks List</h3>
      {stockList.map((stock, index) => {
        return (
          <div key={index} className="stocks-grid">
            <li>{stock.stock}</li>
            <span>{+stock.price.prices[0]["4. close"]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stocks;
