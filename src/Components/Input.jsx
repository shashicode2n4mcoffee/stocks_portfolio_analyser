import React, {useState, useEffect} from 'react'
import {fetchApi} from "../Api/data"

const Input = ({handleStockList}) => {
  const [name,setName] = useState("");

  const handleAdd = ()=>{
    
    fetchApi(name).then((res)=>{
      const arr = res["Weekly Time Series"]
      const datesLength = Object.keys(arr).length
      const dates = datesLength > 156 ? Object.keys(arr).slice(0,156):Object.keys(arr);
      const prices = datesLength > 156 ?  Object.values(arr).slice(0,156):Object.values(arr)
      handleStockList({stock:name, price:{dates,prices}})
      setName("");
    }).catch((e)=>{
      console.log(e)
    })
  }
  return (
    <div className='input'>
      <h3>Enter the stock</h3>
      <div className='input-stockname'>
      <label htmlFor="stock">Stock Name</label>
      <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
      </div>
      <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default Input
