import Link from "react-router-dom"
import "./chartBox.css"
import {Line,LineChar,ResponsiveContainer,Tooltip} from "recharts"

export default function ChartBox(props){
    return(
        <div className="chart-box">
            <div className="box-info">
                <div className="title">
                    <img src={props}/>
                </div>
            </div>
        </div>
    )
}