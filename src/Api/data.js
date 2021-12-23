import axios from "axios"
export const fetchApi =  async (stock)=>{

  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${stock}.BSE&outputsize=full&apikey=9EHYYZLKYLZPY5AD`
  try {
    const res = await axios.get(url)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
