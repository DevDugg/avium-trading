"use client";

import { motion } from "framer-motion";

interface IPlusMinusProps {
  isOpen?: boolean;
}

const PlusMinus = ({ isOpen }: IPlusMinusProps) => {
  return (
    <motion.div
      className="rounded-full w-6 h-6 min-w-6 relative"
      initial={{ rotate: "0deg" }}
      animate={isOpen ? { rotate: "90deg" } : {}}
    >
      <motion.div
        className="absolute h-0.5 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-WHITE"
        initial={{ width: 16 }}
        animate={isOpen ? { width: 0 } : {}}
      ></motion.div>
      <div className="absolute w-0.5 h-4 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-WHITE"></div>
    </motion.div>
  );
};
export default PlusMinus;
