import React, { PureComponent } from "react";
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

function MaintenanceCosts() {
  const data = [
    {
      name: "October",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "November",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "December",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "January",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="service-provider-performance round">
      Maintenance Costs
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default MaintenanceCosts;
