"use client";
import NavbarMain from "@/components/Home/navbar";

import Image from "next/image";
import GridCom from "@/components/Home/GridCom";
import FooterCom from "@/components/Home/FooterCom";
import TextCom from "@/components/Home/TextCom";
import { ContainerScroll } from "@/components/container-scroll-animation";
import { AnimatedBeamMultipleOutputDemo } from "@/components/global/AnimatedBeamMultipleOutputDemo";

export default function Home() {
  return (
    <div className="bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 ">
      <NavbarMain />
      <section className=" w-full !overflow-visible relative flex flex-col items-center ">
        <div className="h-full w-full flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-950 dark:from-gray-100 dark:to-gray-500 font-sans font-bold">
                Enhancing security for mobile applications
              </h1>
            }
          >
            <Image
              src={`/banner.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top justify-center"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </section>
      <AnimatedBeamMultipleOutputDemo />
      {/* <HeroCom /> */}

      <GridCom />
      <TextCom />
      <FooterCom />
    </div>
  );
}
