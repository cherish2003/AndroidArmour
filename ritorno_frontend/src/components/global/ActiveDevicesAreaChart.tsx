// "use client";

// import {
//   Line,
//   LineChart,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "shadcn/react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";

// // Dummy data for active mobile devices over time
// const activeDevicesData = [
//   { date: "2024-12-01", activeCount: 50 },
//   { date: "2024-12-02", activeCount: 55 },
//   { date: "2024-12-03", activeCount: 60 },
//   { date: "2024-12-04", activeCount: 65 },
//   { date: "2024-12-05", activeCount: 70 },
//   { date: "2024-12-06", activeCount: 75 },
//   { date: "2024-12-07", activeCount: 80 },
//   { date: "2024-12-08", activeCount: 85 },
//   { date: "2024-12-09", activeCount: 90 },
//   { date: "2024-12-10", activeCount: 95 },
// ];

// const ActiveDevicesLineChart = () => {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Active Mobile Devices Over Time</CardTitle>
//         <CardDescription>
//           Number of active mobile devices over the last 10 days.
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <LineChart width={600} height={400} data={activeDevicesData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line
//             type="monotone"
//             dataKey="activeCount"
//             stroke="#8884d8"
//             activeDot={{ r: 8 }}
//           />
//         </LineChart>
//       </CardContent>
//     </Card>
//   );
// };

// export default ActiveDevicesLineChart;
