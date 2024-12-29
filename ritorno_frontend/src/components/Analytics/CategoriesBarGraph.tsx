// "use client";

// import { TrendingUp } from "lucide-react";
// import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
// import { Badge } from "@/components/ui/badge";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// const chartConfig = {
//   desktop: {
//     label: "Active Devices",
//     color: "hsl(var(--chart-1))",
//   },
// } satisfies ChartConfig;

// export function ActiveDevicesBarGraph({ activeDevices }: any) {
//   // Data mapping for active devices, could be session counts or device counts per category
//   const data = activeDevices?.map(
//     (device: { category: string; activeCount: number }) => ({
//       category: device.category,
//       activeDevices: device.activeCount,
//     })
//   );

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Active Devices for Threat Analysis</CardTitle>
//         <CardDescription>
//           Active devices and their corresponding threat categories.
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={chartConfig}>
//           <BarChart
//             data={data}
//             margin={{ left: 12, right: 12, top: 12, bottom: 30 }}
//           >
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="category"
//               tickLine={false}
//               tickMargin={10}
//               axisLine={false}
//               tickFormatter={(value) => value.slice(0, 20)}
//             />
//             <YAxis tickFormatter={(value) => `${value} Devices`} />
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <Bar
//               dataKey="activeDevices"
//               fill="var(--color-desktop)"
//               radius={8}
//             />
//           </BarChart>
//         </ChartContainer>
//         <div className="font-medium text-muted-foreground">
//           Identified active devices in each category
//         </div>
//       </CardContent>
//       <CardFooter className="flex-col items-start text-sm overflow-scroll no-scrollbar">
//         <div className="flex gap-2 leading-none whitespace-nowrap ">
//           {activeDevices && activeDevices.length > 0 ? (
//             activeDevices.map((device: { category: string }) => (
//               <Badge key={device.category} variant={"outline"}>
//                 {device.category}
//               </Badge>
//             ))
//           ) : (
//             <div>No devices available</div>
//           )}
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }
