"use client";
import React, { useState, useEffect, useRef } from "react";
// import UploadFile from "./upload";
import lottie from "lottie-web";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import AnimatedTextCharacter from "../global/animatedtextchar";
import { useNavigation } from "../Providers/NavigationProvider";
import { Apptype } from "./Apptype";
import { FileUpload } from "../file-upload";
import { UploadFile } from "./upload";

const UploadCom = () => {
  const anicontainer1 = useRef<HTMLDivElement>(null);
  const anicontainer2 = useRef<HTMLDivElement>(null);
  const anicontainer3 = useRef<HTMLDivElement>(null);
  const anicontainer4 = useRef<HTMLDivElement>(null);
  const anicontainer5 = useRef<HTMLDivElement>(null);

  const [isAnimationVisible1, setIsAnimationVisible1] = useState(true);
  const [isAnimationVisible2, setIsAnimationVisible2] = useState(true);
  const [isAnimationVisible3, setIsAnimationVisible3] = useState(true);

  const [mode, setMode] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const [animationStep, setAnimationStep] = useState(-1);
  const [showAppType, setShowAppType] = useState(false);
  const [showSecuritytypes, setshowSecuritytypes] = useState(false);

  useEffect(() => {
    let animationInstance1: any;
    let animationInstance2: any;
    let animationInstance3: any;
    let animationInstance4: any;
    let animationInstance5: any;

    if (anicontainer1.current && animationStep === 0) {
      animationInstance1 = lottie.loadAnimation({
        container: anicontainer1.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "/ani2.json",
      });

      animationInstance1.addEventListener("complete", () => {
        setShowAppType(true);
        setIsAnimationVisible1(false);
      });
    }

    if (anicontainer2.current && animationStep === 1) {
      animationInstance2 = lottie.loadAnimation({
        container: anicontainer2.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/ani3.json",
      });
      animationInstance2.addEventListener("complete", () => {
        setAnimationStep(2);
        setIsAnimationVisible2(false);
      });

      // setTimeout(() => {
      //   setAnimationStep(2);
      //   setIsAnimationVisible2(false);
      // }, 6000);
    }
    if (anicontainer3.current && animationStep === 2) {
      animationInstance3 = lottie.loadAnimation({
        container: anicontainer3.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/complie.json",
      });

      animationInstance3.addEventListener("complete", () => {
        setAnimationStep(3);
        setIsAnimationVisible2(false);
      });
      setTimeout(() => {
        setAnimationStep(3);
        setIsAnimationVisible3(false);
      }, 6000);
    }
    if (anicontainer4.current && animationStep === 3) {
      animationInstance4 = lottie.loadAnimation({
        container: anicontainer4.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "/ani1.json",
      });
      setTimeout(() => {
        setAnimationStep(4);
      }, 6000);
    }
    if (anicontainer5.current && animationStep === 4) {
      animationInstance5 = lottie.loadAnimation({
        container: anicontainer5.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "/Done.json",
      });

      animationInstance5.addEventListener("complete", () => {
        setShowAppType(true);
      });
    }

    return () => {
      if (animationInstance1) animationInstance1.destroy();
      if (animationInstance2) animationInstance2.destroy();
      if (animationInstance3) animationInstance3.destroy();
      if (animationInstance4) animationInstance4.destroy();
      if (animationInstance5) animationInstance5.destroy();
    };
  }, [animationStep]);

  return (
    <>
      <div className="min-h-screen w-full dark:bg-neutral-900 text-black flex flex-col justify-center items-center">
        {!isUploading && (
          <>
            <UploadFile setupload={setIsUploading} anistep={setAnimationStep} />
          </>
        )}

        {animationStep === 0 && isAnimationVisible1 && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: [0, 1, 1, 0],
                x: [-100, 0, 0, 100],
              }}
              transition={{
                ease: "easeInOut",
                duration: 6,
                times: [0, 0.25, 0.75, 1],
              }}
              className="flex flex-col justify-center items-center"
            >
              <motion.div
                className="h-28 w-28 sm:h-40 sm:w-40 md:h-60 md:w-60"
                ref={anicontainer1}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
              />
              <AnimatedTextCharacter
                text="Uploading apk.."
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
          </>
        )}
        {animationStep === 1 && isAnimationVisible2 && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: [0, 1, 1, 0],
                x: [-100, 0, 0, 100],
              }}
              transition={{
                ease: "easeInOut",
                duration: 6,
                times: [0, 0.25, 0.75, 1],
              }}
              className="flex flex-col justify-center items-center"
            >
              <motion.div
                className="h-28 w-28 sm:h-40 sm:w-40 md:h-60 md:w-60"
                ref={anicontainer2}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
              />
              <AnimatedTextCharacter
                text="Decompiling the app..."
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
          </>
        )}

        {animationStep === 3 && isAnimationVisible3 && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: [0, 1, 1, 0],
                x: [-100, 0, 0, 100],
              }}
              transition={{
                ease: "easeInOut",
                duration: 6,
                times: [0, 0.25, 0.75, 1],
              }}
              className="flex flex-col justify-center items-center"
            >
              <motion.div
                className="h-28 w-28 sm:h-40 sm:w-40 md:h-60 md:w-60"
                ref={anicontainer3}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
              />
              <AnimatedTextCharacter
                text="Reading the project files ..."
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
          </>
        )}
      </div>
    </>
  );
};

export default UploadCom;
