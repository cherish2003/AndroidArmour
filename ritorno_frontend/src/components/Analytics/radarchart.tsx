"use client";

import { ShieldAlert } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

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

const threatData = [
  { category: "January", cheatTool: 120, emulator: 80, root: 90, debugger: 60 },
  {
    category: "February",
    cheatTool: 140,
    emulator: 95,
    root: 85,
    debugger: 70,
  },
  { category: "March", cheatTool: 150, emulator: 100, root: 95, debugger: 75 },
  { category: "April", cheatTool: 160, emulator: 110, root: 105, debugger: 80 },
  { category: "May", cheatTool: 170, emulator: 120, root: 115, debugger: 85 },
  { category: "June", cheatTool: 180, emulator: 125, root: 120, debugger: 90 },
];

const threatConfig = {
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
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function ThreatRadar() {
  return (
    <Card>
      <CardHeader className="items-center">
        <CardTitle>Threat Analysis - Radar Chart</CardTitle>
        <CardDescription>
          Detection statistics for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={threatConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={threatData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="category" />
            <PolarGrid />
            <Radar
              dataKey="cheatTool"
              fill="var(--color-cheatTool)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
            <Radar
              dataKey="emulator"
              fill="var(--color-emulator)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
            <Radar
              dataKey="root"
              fill="var(--color-root)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
            <Radar
              dataKey="debugger"
              fill="var(--color-debugger)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Increasing threats identified in recent months
          <ShieldAlert className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  );
}
