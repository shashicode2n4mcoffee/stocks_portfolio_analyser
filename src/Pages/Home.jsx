import React, { useState, useEffect, lazy, Suspense } from "react";
import { PriceMerge, Dates } from "../Utils/Price";
import "./Home.css";

const Portfolio = lazy(() => import("../Components/Portfolio"));
const Input = lazy(() => import("../Components/Input"));
const Stocks = lazy(() => import("../Components/Stocks"));

const Home = () => {
  const [stockList, setStockList] = useState([]);
  const [finalData, setFinalData] = useState({});

  const handleStockList = (stock) => {
    setStockList((prevState) => [...prevState, stock]);
  };

  useEffect(() => {
    const finalValueArr = stockList.length && PriceMerge(stockList);
    const finalDates = stockList.length && Dates(stockList);
    setFinalData({ finalDates, finalValueArr });
  }, [stockList]);

  // useEffect(() => {
  //   console.log("FINAL ARRAY : ", finalData);
  // }, [finalData]);

  return (
    <div className="home">
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Portfolio Performance Indicator</h1>
        <Input handleStockList={handleStockList} />
      </Suspense>
      {stockList.length ? (
        <div className="home-cart-stocks">
          <Suspense fallback={<div>Loading...</div>}>
            <Portfolio finalData={finalData} />
            <Stocks stockList={stockList} />
          </Suspense>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
