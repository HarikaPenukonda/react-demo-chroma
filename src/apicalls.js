import axios from "axios"

const basesUrl = "http://localhost:3001/"

async function getTopDealUsers(){
   const response =  await axios.get(`${baseURL}users/top-deal-users`)
   const responseBody = await response.json()
}