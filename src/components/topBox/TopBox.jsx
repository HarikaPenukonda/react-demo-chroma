import { useEffect, useState } from "react"
import "./topBox.css"
import { getTopDealUsers } from "../../apicalls"
//import { topDealUsers } from "../../data.js"

export default function TopBox(){
    const [topDealUsers,setTopDealUsers] = useState([])

    // useEffect is a React Hook that lets you synchronize a component with an external system.
    // we are making a call to API, instead of using out data.js file

    // useEffect(async ()=>{
    //     setTopDealUsers(await getTopDealUsers())
    // },[])

    useEffect(()=>{
        let getData = async()=>{
            setTopDealUsers(await getTopDealUsers())
        }
        getData();
    },[])

    return(
        <div className="topBox">
            <h1>Top Deals</h1>
            <div className="list">
                {topDealUsers.map(user =>(
                    <div className="listItem" key={user.id}>
                    <div className="user">
                    <img src={user.img} alt=""/>
                    <div className="userTexts">
                        <span className="username">{user.username}</span>
                        <span className="email">{user.email}</span>
                    </div>
                    </div>
                    <span className="amount">${user.amount}</span>
            </div>
            ))}
        </div>
        </div>
    )
}