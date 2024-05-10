"use client";

import { animate, motion, useIsomorphicLayoutEffect } from "framer-motion";

import colors from "@/colors";
import { useInView } from "react-intersection-observer";
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
    threshold: 0.3,
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
      className="p-6 border-r border-WHITE relative cursor-default max-lg:p-4 max-sm:py-2 max-[500px]:px-3"
      style={position === 0 ? { borderLeft: `1px solid ${colors.WHITE}` } : {}}
      animate={{
        borderColor: hoveredNumber !== null ? `${colors.WHITE}00` : colors.WHITE,
      }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-GRADIENT -z-10 flex items-center justify-center pointer-events-none p-6 max-lg:p-4 max-sm:py-2 max-[500px]:px-3"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: hoveredNumber === position ? 1 : 0,
        }}
      >
        <span className="text-2xl w-fit font-bold max-lg:text-base max-sm:text-xs">{description}</span>
      </motion.div>
      <motion.div
        className="flex flex-col items-start gap-10 w-fit max-sm:gap-6"
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: hoveredNumber === position ? 0 : 1,
        }}
      >
        <span className="text-[80px] w-fit max-lg:text-[64px] max-sm:text-H2 max-[500px]:text-[40px]">
          {typeof number === "string" ? number : `${latest}+`}
        </span>
        <span className="text-lg w-fit max-lg:text-base max-sm:text-xs">{name}</span>
      </motion.div>
    </motion.div>
  );
};
export default Guarantee;
