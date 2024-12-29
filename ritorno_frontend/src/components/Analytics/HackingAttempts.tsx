"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  attempts: {
    label: "active count",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const HackingAttempts = ({ data }: any) => {
  const chartData = React.useMemo(() => {
    if (data) {
      return data.map((activeitem: any, index: number) => ({
        time: activeitem.time,
        attempts: activeitem.attemptCount,
      }));
    }
  }, [data]);

  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("attempts");
  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Hacking Attempts Over Time</CardTitle>
          <CardDescription>
            Displaying the number of hacking attempts over a specified period of
            time.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[300px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
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
              minTickGap={32}
            />
            <YAxis
              dataKey="attempts"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.toFixed(2)}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent className="w-[150px]" nameKey="views" />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { HackingAttempts };
