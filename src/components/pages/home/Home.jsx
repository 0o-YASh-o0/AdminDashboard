import React from 'react'

import Chart from '../../charts/Chart'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import Piechart from '../../piechart/Piechart'
import Areachart from "../../areaChart/Areachart"
import "./home.css"

export default function Home() {
    return (
        <div className="home">
           <FeaturedInfo/>
           <Chart/>
           <Piechart/>
           
           </div>
    )
}
