import React, {useState, useEffect} from 'react'
import Input from '../Components/Input'
import Stocks from '../Components/Stocks'
import Portfolio from "../Components/Portfolio"
import { PriceMerge,Dates } from '../Utils/Price'

const Home = () => {
  const [stockList, setStockList] = useState([])
  const [finalData, setFinalData] = useState({})

  const handleStockList = (stock)=>{
    
    setStockList(prevState=>[...prevState,stock])
  }

  useEffect(()=>{
    console.log("STOCKLIST : ",stockList )
    const finalValueArr =  stockList.length && PriceMerge(stockList)
    const finalDates = stockList.length && Dates(stockList)
    setFinalData({finalDates,finalValueArr})
  },[stockList])

  useEffect(()=>{
    console.log("FINAL ARRAY : ",finalData)
  },[finalData])

  return (
    <div>
      <Portfolio finalData={finalData}/>
      <Input handleStockList = {handleStockList}/>
      <Stocks stockList={stockList}/>
    </div>
  )
}

export default Home
