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

function MaintenanceCosts(props) {
  const data = [
    {
      name: "October",
      uv: 2780,
      "pv test": 3908,
      amt: 2000,
    },
    {
      name: "November",
      uv: 1890,
      "pv test": 4800,
      amt: 2181,
    },
    {
      name: "December",
      uv: 2390,
      "pv test": 3800,
      amt: 2500,
    },
    {
      name: "January",
      uv: 3490,
      "pv test": 4300,
      amt: 2100,
    },
  ];

  // const arrayOfLines = props.maintenanceCosts.map((maintenanceData, idx) => {
  //   return (
  //     <Line key={idx} type="monotone" dataKey={"yo"} stroke="#8884d8"/>
  //   );
  // });

  const test = [
    <Line type="monotone" dataKey="pv test" stroke="#8884d8" />,
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />,
  ];
  return (
    <div className="service-provider-performance round">
      Maintenance Costs
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line type="monotone" dataKey="pv test" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        {/* If the maintenance data is not empty it will fill the LineChart with the parameters from the maintenance table */}
        {props.maintenanceCosts &&
          props.maintenanceCosts.length > 0 && test }
      </LineChart>
    </div>
  );
}

export default MaintenanceCosts;
