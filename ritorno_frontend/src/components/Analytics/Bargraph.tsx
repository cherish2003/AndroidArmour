"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  {
    threat: "Cheat tool detection",
    value: 187,
    fill: "hsl(var(--chart-1))",
  },
  { threat: "Emulator detection", value: 200, fill: "hsl(var(--chart-2))" },
  { threat: "Root detection", value: 195, fill: "hsl(var(--chart-3))" },
  { threat: "Debugger detection", value: 173, fill: "hsl(var(--chart-4))" },
];

const chartConfig = {
  value: {
    label: "Threats",
  },
  cheatTool: {
    label: "Cheat Tool Detection",
    color: "hsl(var(--chart-1))",
  },
  emulator: {
    label: "Emulator Detection",
    color: "hsl(var(--chart-2))",
  },
  root: {
    label: "Root Detection",
    color: "hsl(var(--chart-3))",
  },
  debugger: {
    label: "Debugger Detection",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Bargraph() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle> Threat Types</CardTitle>
        <CardDescription>System Threat Detection Overview</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="aspect-auto h-[250px] w-full"
          config={chartConfig}
        >
          <BarChart
            width={600}
            height={300}
            accessibilityLayer
            data={chartData}
          >
            {" "}
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="threat"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="value"
              strokeWidth={2}
              barSize={60}
              radius={8}
              activeIndex={2}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2">
          {chartData.map((data) => (
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-sm"
                style={{ backgroundColor: data.fill }}
              />
              <span>{data.threat}</span>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
