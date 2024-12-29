"use client";
import React from "react";
import Image from "next/image";
import { WobbleCard } from "../wobble-card";
const GridCom = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-coolgratli dark:bg-coolgratdr min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black dark:text-white">
            AndroidArmour: Comprehensive Security, Seamless Performance
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-500 dark:text-neutral-300">
            Delivering advanced custom security features while preserving your
            app's original functionality.
          </p>
        </div>
        <Image
          src="/undraw_android.svg"
          width={600}
          height={600}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[30%]   -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-coolgratli dark:bg-coolgratdr">
        <h2 className="max-w-80  text-left text-balance text-base  md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black dark:text-white ">
          Runtime Application Self Protection (RASP)
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6  text-neutral-500 dark:text-neutral-300">
          Real-time source code protection, App Integrity protection,
          Anti-debugging, Network packet sniffing/spoofing tool detection &
          cheat tools.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-coolgratli dark:bg-coolgratdr min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black dark:text-white">
            Advanced Security for Your Apps
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-500 dark:text-neutral-300">
            Protect your applications with cutting-edge security features,
            including Cheat Tool Detection, Emulator Detection, Root Detection,
            and Debugger Detection. Ensure a secure and seamless experience for
            your users.
          </p>
        </div>

        <Image
          src="/undraw_securit.svg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[8%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
};

export default GridCom;
