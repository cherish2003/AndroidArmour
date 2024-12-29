"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ActiveDaysCom } from "./Activedayscom";
import { HackingAttempts } from "./HackingAttempts";
import { HackingTypesStreaming } from "./HackingTypesStreaming";
import { Bargraph } from "./Bargraph";
import { RadarChart } from "recharts";
import { ThreatRadar } from "./radarchart";

const activityData = [
  { time: "2024-12-01", activeDevices: 0 },
  { time: "2024-12-02", activeDevices: 1 },
  { time: "2024-12-03", activeDevices: 3 },
  { time: "2024-12-04", activeDevices: 7 },
  { time: "2024-12-05", activeDevices: 8 },
  { time: "2024-12-06", activeDevices: 12 },
  { time: "2024-12-07", activeDevices: 16 },
];
const data = [
  { name: "Category A", value: 30, color: "#FF5733" }, // Red
  { name: "Category B", value: 70, color: "#33FF57" }, // Green
  { name: "Category C", value: 50, color: "#3357FF" }, // Blue
  { name: "Category D", value: 90, color: "#F4C542" }, // Yellow
];

const hackingAttemptsData = [
  { time: "2024-12-01", attemptCount: 1 },
  { time: "2024-12-02", attemptCount: 2 },
  { time: "2024-12-03", attemptCount: 3 },
  { time: "2024-12-04", attemptCount: 5 },
  { time: "2024-12-05", attemptCount: 4 },
  { time: "2024-12-06", attemptCount: 6 },
  { time: "2024-12-07", attemptCount: 2 },
];

export default function AnalyticsMain() {
  const handleFileChange = (value: string) => {
    // setSelectedFile(value);
  };

  return (
    <>
      <div className="flex flex-col gap-5 w-full dark:bg-neutral-900 dark:text-white p-5">
        <Select value={""} onValueChange={handleFileChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select App" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys([]).map((fileName) => (
              <SelectItem
                key={fileName}
                value={fileName}
                className="dark:text-white"
              >
                {fileName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Threat Analytics
        </h2>
        <div className="w-full h-full grid items-start grid-cols-2 gap-2">
          <Tabs defaultValue="activeDevices" className="w-full h-full">
            <TabsList className="flex gap-4 ">
              <TabsTrigger value="activeDevices">Active Devices</TabsTrigger>
              <TabsTrigger value="hackingAttempts">
                Hacking Attempts
              </TabsTrigger>
            </TabsList>
            <TabsContent value="activeDevices" className="w-full h-full ">
              <ActiveDaysCom days={activityData} />
            </TabsContent>
            <TabsContent value="hackingAttempts" className="w-full h-full">
              <HackingAttempts data={hackingAttemptsData} />
            </TabsContent>
          </Tabs>
          <div className="w-full flex justify-center items-center">
            <HackingTypesStreaming />
          </div>
        </div>
        <Bargraph />
        <ThreatRadar />
      </div>
    </>
  );
}
