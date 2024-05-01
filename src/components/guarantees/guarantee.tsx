"use client";

import colors from "@/colors";
import { motion } from "framer-motion";

interface GuaranteeProps {
  number: string;
  name: string;
  position: number;
  hoveredNumber: number | null;
}

const Guarantee = ({ name, number, hoveredNumber, position }: GuaranteeProps) => {
  return (
    <motion.div
      className="px-6 py-6 border-r border-WHITE relative"
      style={position === 0 ? { borderLeft: `1px solid ${colors.WHITE}` } : {}}
      animate={{
        borderColor: hoveredNumber !== null ? `${colors.WHITE}00` : colors.WHITE,
      }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-GRADIENT -z-10 pointer-events-none"
        animate={{
          opacity: hoveredNumber === position ? 1 : 0,
        }}
      ></motion.div>
      <div className="flex flex-col items-center gap-10 w-fit">
        <span className="text-[80px] w-fit">{number}</span>
        <span className="text-lg w-fit">{name}</span>
      </div>
    </motion.div>
  );
};
export default Guarantee;
