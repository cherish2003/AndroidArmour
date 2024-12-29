"use client";

import * as React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Chart config for colors
const chartConfig = {
  attemptCount: {
    label: "Hacking Attempts",
    color: "hsl(210, 100%, 50%)", // Replace with a fixed color for the line
  },
} satisfies ChartConfig;

const HackingTypesStreaming = () => {
  // Dummy counter data for live hacking attempts
  const [counter, setCounter] = React.useState(35);

  // Hardcoded data for the last hour (60 data points)
  const [data, setData] = React.useState<any[]>([
    { time: "12:00", attempts: 3 },
    { time: "12:10", attempts: 5 },
    { time: "12:20", attempts: 8 },
    { time: "12:30", attempts: 6 },
    { time: "12:40", attempts: 9 },
    { time: "12:50", attempts: 7 },
    { time: "01:00", attempts: 11 },
    { time: "01:10", attempts: 4 },
    { time: "01:20", attempts: 8 },
    { time: "01:30", attempts: 5 },
    { time: "01:40", attempts: 10 },
    { time: "01:50", attempts: 12 },
    { time: "02:00", attempts: 6 },
    { time: "02:10", attempts: 15 },
    { time: "02:20", attempts: 7 },
    { time: "02:30", attempts: 9 },
    { time: "02:40", attempts: 8 },
    { time: "02:50", attempts: 13 },
    { time: "03:00", attempts: 10 },
    { time: "03:10", attempts: 5 },
    { time: "03:20", attempts: 6 },
    { time: "03:30", attempts: 4 },
    { time: "03:40", attempts: 9 },
    { time: "03:50", attempts: 11 },
    { time: "04:00", attempts: 7 },
    { time: "04:10", attempts: 10 },
    { time: "04:20", attempts: 8 },
    { time: "04:30", attempts: 6 },
    { time: "04:40", attempts: 5 },
    { time: "04:50", attempts: 12 },
    { time: "05:00", attempts: 14 },
    { time: "05:10", attempts: 8 },
    { time: "05:20", attempts: 7 },
    { time: "05:30", attempts: 9 },
    { time: "05:40", attempts: 5 },
    { time: "05:50", attempts: 10 },
    { time: "06:00", attempts: 6 },
    { time: "06:10", attempts: 12 },
    { time: "06:20", attempts: 11 },
    { time: "06:30", attempts: 8 },
    { time: "06:40", attempts: 10 },
    { time: "06:50", attempts: 9 },
    { time: "07:00", attempts: 7 },
    { time: "07:10", attempts: 8 },
    { time: "07:20", attempts: 6 },
    { time: "07:30", attempts: 10 },
    { time: "07:40", attempts: 12 },
    { time: "07:50", attempts: 9 },
    { time: "08:00", attempts: 10 },
    { time: "08:10", attempts: 13 },
    { time: "08:20", attempts: 7 },
    { time: "08:30", attempts: 9 },
    { time: "08:40", attempts: 6 },
    { time: "08:50", attempts: 8 },
    { time: "09:00", attempts: 10 },
  ]);

  return (
    <Card>
      <CardHeader className="w-full flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Hacking Attempts Streaming</CardTitle>
          <CardDescription>
            Live counter and graph of hacking attempts over the last hour.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        {/* Counter */}
        <div className="text-center text-4xl font-semibold mb-5">
          <p className="mb-2">Live Hacking Attempts: </p>
          <p>{counter}</p>
        </div>

        {/* Line Chart */}
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              dataKey="attempts"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <Tooltip
              content={
                <ChartTooltipContent className="w-[150px]" nameKey="attempts" />
              }
            />
            <Line
              dataKey="attempts"
              type="monotone"
              stroke="#4CAF50"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { HackingTypesStreaming };
