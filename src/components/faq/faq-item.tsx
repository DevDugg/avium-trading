"use client";

import PlusMinus from "./plus-minus";
import { motion } from "framer-motion";
import { useState } from "react";

interface IFAQItemProps {
  answer: string;
  question: string;
  isOpen: boolean;
}

const FAQItem = ({ answer, question, isOpen }: IFAQItemProps) => {
  return (
    <div className="bg-LIGHTBLACK p-6 rounded-2xl flex flex-col cursor-pointer">
      <div className="flex items-center gap-10 justify-between max-sm:gap-8 max-[450px]:gap-6">
        <h3 className="text-H3 font-bold">{question}</h3>
        <PlusMinus isOpen={isOpen} />
      </div>
      <motion.div
        className="text-GRAY text-lg overflow-hidden"
        initial={{ opacity: 0, height: 0, marginTop: 0 }}
        animate={isOpen ? { opacity: 1, height: "fit-content", marginTop: 40 } : {}}
      >
        {answer}
      </motion.div>
    </div>
  );
};
export default FAQItem;
