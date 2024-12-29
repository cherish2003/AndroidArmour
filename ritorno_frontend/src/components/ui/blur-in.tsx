"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

interface BlurInProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}

const BlurIn = ({ word, className, variant, duration = 1 }: BlurInProps) => {
  const ref = useRef(null); // Create a ref for the component
  const isInView = useInView(ref, { once: true }); // Check if the element is in view

  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate only when in view
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-5xl ",
        className
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
