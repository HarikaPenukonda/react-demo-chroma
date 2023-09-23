import "./home.css"
import TopBox from "../../components/topBox/TopBox"
import ChartBox from "../../components/chartBox/ChartBox"
// import PieChartBox from "../../components/pieChartBox/PieChartBox"
// import BigChartBox from "../../components/bigChartBox/BigChartBox"
// import BarChartBox from "../../components/barChartBox/BarChartBox"

export default function Home(){
    return(
        <div className="home">
            <div className="box box1">
                <TopBox/>
            </div>
             <div className="box box2">
                <ChartBox/>
            </div>
            <div className="box box3">
                <ChartBox/>
            </div>
            {/* <div className="box box4">
                <PieChartBox/>
            </div>
            <div className="box box5">
                <ChartBox/>
            </div>
            <div className="box box6">
                <ChartBox/>
            </div>
            <div className="box box7">
                <BigChartBox/>
            </div>
            <div className="box box8">
                <BarChartBox/>
            </div>
            <div className="box box9">
                <BarChartBox/>
            </div>  */}
        </div>
    )
}