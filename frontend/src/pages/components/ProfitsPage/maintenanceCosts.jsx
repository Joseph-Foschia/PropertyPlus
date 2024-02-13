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
  console.log("HELLOOOOOOOOOOO", props.maintenanceData);

  // const data = [
  //   {
  //     name: props.maintenanceData[0].month_name,
  //     cost: props.maintenanceData[0].total_maintenance_cost,
  //   },
  //   {
  //     name: props.maintenanceData[1].month_name,
  //     cost: props.maintenanceData[1].total_maintenance_cost,
  //   },
  //   {
  //     name: props.maintenanceData[2].month_name,
  //     cost: props.maintenanceData[2].total_maintenance_cost,
  //   },
  //   {
  //     name: props.maintenanceData[3].month_name,
  //     cost: props.maintenanceData[3].total_maintenance_cost,
  //   },
  //   {
  //     name: props.maintenanceData[4].month_name,
  //     cost: props.maintenanceData[4].total_maintenance_cost,
  //   },
  // ];

  const data = props.maintenanceData.slice(0, 5).map((data, index) => ({
    name: data.month_name,
    cost: data.total_maintenance_cost,
  }));

  // const arrayOfLines = props.maintenanceCosts.map((maintenanceData, idx) => {
  //   return (
  //     <Line key={idx} type="monotone" dataKey={"yo"} stroke="#8884d8"/>
  //   );
  // });

  const test = [
    // <Line type="monotone" dataKey="pv test" stroke="#8884d8" />,
    // <Line type="monotone" dataKey="uv" stroke="#82ca9d" />,
  ];
  return (
    <div className="service-provider-performance round">
      Maintenance Costs
      {/* <LineChart
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
        <Legend /> */}
      {/* What do we need from this?:  cost, address */}
      {/* <Line type="monotone" dataKey="Plumbing" stroke="#8884d8" />
        <Line type="monotone" dataKey="HVAC" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Carpentry" stroke="#82da9d" />
        <Line type="monotone" dataKey="Electrical" stroke="#82ba9d" /> */}
      {/* If the maintenance data is not empty it will fill the LineChart with the parameters from the maintenance table */}
      {/* {props.maintenanceCosts &&
          props.maintenanceCosts.length > 0 && test } */}
      {/* </LineChart> */}
      {/* <BarChart
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
          <Bar dataKey="cost" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart> */}
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
