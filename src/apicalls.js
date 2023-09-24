import axios from "axios"

const basesUrl = "http://localhost:3001/"

/*
    The axios.get() returns a promise, which returns a promise
*/

export async function getTopDealUsers(){
   const response =  await axios.get(`${baseURL}users/top-deal-users`)
   const responseBody = await response.json()
   console.log(responseBody)
   return responseBody
}