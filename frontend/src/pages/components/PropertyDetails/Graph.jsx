import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

// export default class Graph extends PureComponent {
//   static demoUrl =
//     "https://codesandbox.io/s/bar-chart-with-positive-negative-i3b8b";

//   render() {
//     const { data } = this.props;
//     return (
//       // <ResponsiveContainer width="50%" height="50%">
//       <BarChart
//         width={500}
//         height={300}
//         data={data}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <ReferenceLine y={0} stroke="#000" />
//         <Bar dataKey="mortgage" fill="#8884d8" />
//         <Bar dataKey="rent" fill="#82ca9d" />
//         <Bar dataKey="margin" fill="FFD700" />
//       </BarChart>
//       // </ResponsiveContainer>
//     );
//   }
// }
