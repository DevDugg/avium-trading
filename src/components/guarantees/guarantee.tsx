"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface GuaranteeProps {
  number: string;
  name: string;
}

const Guarantee = ({ name, number }: GuaranteeProps) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      className="px-6 py-6 border-r border-WHITE relative"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-GRADIENT -z-10 pointer-events-none"
        animate={{ opacity: hover ? 1 : 0 }}
      ></motion.div>
      <div className="flex flex-col items-center gap-10 w-fit">
        <span className="text-[80px] w-fit">{number}</span>
        <span className="text-lg w-fit">{name}</span>
      </div>
    </motion.div>
  );
};
export default Guarantee;
