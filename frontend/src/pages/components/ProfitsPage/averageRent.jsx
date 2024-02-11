import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function AverageRent(props) {
  console.log("Average Rent: ", props.averageRent);

  const data = props.averageRent.slice(0, 4).map((data, index) => ({
    name: data.address.substring(0, 12),
    average_rent_per_unit: data.average_rent_per_unit
  }));

  console.log("Data rent: ", data);
  return (
    <div className="tenants-by-property round">
      <h3>Average Rent per Unit</h3>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="average_rent_per_unit" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </div>
  );
}

export default AverageRent;
