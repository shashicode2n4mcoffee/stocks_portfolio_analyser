export const PriceMerge = (stockList)=>{
  const arr = new Array(156).fill(0)
  for(let i=0;i<156;i++){
    for(let j=0;j<stockList.length;j++){
      arr[i] = arr[i] + +stockList[j].price.prices[i]["4. close"];
    }
  }
  return arr
}

export const Dates = (stockList)=>{
  return stockList[0].price.dates;
}
