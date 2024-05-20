"use client";

import { animate, motion, useIsomorphicLayoutEffect } from "framer-motion";

import colors from "@/colors";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";

interface GuaranteeProps {
  number: number | string;
  name: string;
  description: string;
  position: number;
  hoveredNumber: number | null;
}

const Guarantee = ({ name, number, hoveredNumber, position, description }: GuaranteeProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const [latest, setLatest] = useState(0);

  useIsomorphicLayoutEffect(() => {
    if (!inView || typeof number === "string") return;
    animate(latest, number, {
      onUpdate: (newLatest) => setLatest(Math.ceil(newLatest)),
      duration: 3,
      ease: "circOut",
      mass: 5,
      damping: 0.1,
      restDelta: 0.01,
    });
  }, [inView]);
  return (
    <motion.div
      ref={ref}
      className={`p-6 ${
        position === 0 ? "border-x" : "border-r"
      } border-WHITE relative cursor-default size-full max-lg:p-4 max-sm:py-2 max-[500px]:px-3 max-[420px]:border-x-0 max-[420px]:border-b max-[420px]:${
        position === 0 ? "border-t" : ""
      } max-[420px]:p-6`}
      animate={{
        borderColor: hoveredNumber !== null ? `${colors.WHITE}00` : colors.WHITE,
      }}
    >
      <motion.div
        className="absolute top-0 left-0 size-full bg-GRADIENT flex items-center justify-between pointer-events-none p-6 max-lg:p-4 max-sm:py-2 max-[500px]:px-3"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: hoveredNumber === position ? 1 : 0,
        }}
      >
        <span className="text-2xl font-bold max-lg:text-base max-sm:font-normal max-[420px]:text-center">
          {description}
        </span>
      </motion.div>
      <motion.div
        className="flex flex-col items-start gap-10 w-fit max-sm:gap-6 max-[450px]:gap-4 max-[420px]:items-center max-[420px]:justify-center max-[420px]:size-full"
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: hoveredNumber === position ? 0 : 1,
        }}
      >
        <span className="text-[80px] w-fit max-lg:text-[64px] max-sm:text-H2 max-[500px]:text-[48px]">
          {typeof number === "string" ? number : `${latest}+`}
        </span>
        <span className="text-lg w-fit max-lg:text-base max-sm:text-base">{name}</span>
      </motion.div>
    </motion.div>
  );
};
export default Guarantee;
