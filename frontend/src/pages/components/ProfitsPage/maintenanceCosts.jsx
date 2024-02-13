import React, { PureComponent } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import graphDataSetter from "../../../helpers/graphHelper";

function MaintenanceCosts(props) {

  const data = props.maintenanceData.slice(0, 5).map((data, index) => ({
    name: data.month_name,
    cost: data.total_maintenance_cost,
  }));

  return (
    <div className="service-provider-performance round">
      Maintenance Costs
      <AreaChart
        width={500}
        height={300}
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
        <YAxis domain={[0, "dataMax + 100"]} />
        <Tooltip />
        <Area type="monotone" dataKey="cost" stroke="#8884d8" fill="#82da9d" />
      </AreaChart>
    </div>
  );
}

export default MaintenanceCosts;
