import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./areachart.css"
export default function areaChart() {


    const data = [
        {
          name: '2015',
          "sales": 20,
          
        },
        {
          name: '2016',
          "sales": 45,
      
        },
        {
          name: '2017',
          "sales": 100,
          
        },
        {
          name: '2018',
          "sales": 75,
          
        },
        
      ];
      

    return (
        <div style={{ width: '65%', height: 300 }} className="areachart">
             <h3 className="chartTitle">Yearly Sales($Millions)</h3>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
}
