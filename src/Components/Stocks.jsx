import React, { useEffect } from 'react'

const Stocks = ({stockList}) => {
  return (
    <div>
      <h3>Stock List</h3>
      {stockList.map((stock, index)=>{
        return(
          <div key={index}>
              <li >{stock.stock}</li>
              <li >{+stock.price.prices[0]["4. close"]}</li>
          </div>
        )
      })}
    </div>
  )
}

export default Stocks
