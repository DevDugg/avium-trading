"use client";

import { animate, motion, useIsomorphicLayoutEffect } from "framer-motion";

import colors from "@/colors";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

interface GuaranteeProps {
  number: number;
  name: string;
  position: number;
  hoveredNumber: number | null;
}

const Guarantee = ({ name, number, hoveredNumber, position }: GuaranteeProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [latest, setLatest] = useState(0);

  useIsomorphicLayoutEffect(() => {
    if (!inView) return;
    animate(latest, Number(number), {
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
        className="absolute top-0 left-0 w-full h-full bg-GRADIENT -z-10 pointer-events-none"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: hoveredNumber === position ? 1 : 0,
        }}
      ></motion.div>
      <div className="flex flex-col items-start gap-10 w-fit max-sm:gap-6">
        <span className="text-[80px] w-fit max-lg:text-[64px] max-sm:text-H2 max-[500px]:text-[40px]">{latest}+</span>
        <span className="text-lg w-fit max-lg:text-base max-sm:text-xs">{name}</span>
      </div>
    </motion.div>
  );
};
export default Guarantee;
