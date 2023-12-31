import axios from "axios"

const baseURL = "http://localhost:3001/"

/*
    The axios.get() returns a promise, which returns a promise
*/

/*
    response - {data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
*/ 

export async function getTopDealUsers(){
   const response =  await axios.get(`${baseURL}users/top-deal-users`)
   //console.log(response.data)
   return response.data.topDealUsers
}