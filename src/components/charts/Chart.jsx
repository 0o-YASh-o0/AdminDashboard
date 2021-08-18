import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const data = [
    {
      name: "Jan",
      "Active user": 4000,
    },
    {
      name: "Feb",
      "Active user": 3000,
    },
    {
      name: "Mar",
      "Active user": 2000,
    },
    {
      name: "Apr",
      "Active user": 2780,
    },
    {
      name: "May",
      "Active user": 1890,
    },
    {
      name: "Jun",
      "Active user": 2390,
    },
    {
      name: "July",
      "Active user": 3490,
    },
    {
      name: "Aug",
      "Active user": 2000,
    },
    {
      name: "Sept",
      "Active user": 680,
    },
    {
      name: "Oct",
      "Active user": 1890,
    },
    {
        name: "Nov",
        "Active user": 3000,
      },
    {
        name: "Dec",
        "Active user": 1000,
      },
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#636e72" />
          <YAxis />
          <Line type="monotone" dataKey="Active user" stroke="#636e72"  />
          <Tooltip/>
          <CartesianGrid stroke="#dae3f2" strokeDasharray="3 4" />
        </LineChart>
      </ResponsiveContainer>
     
    </div>
  );
}
