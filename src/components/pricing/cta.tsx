"use client";

import { duplicateVariants, textVariants } from "@/variants/pricing.variants";

import { motion } from "framer-motion";
import { useScrollToTarget } from "@/lib/use-scroll-to-target";

interface CTAProps {
  title: string;
  link: string;
}

const CTA = ({ link, title }: CTAProps) => {
  const { handleOnClick } = useScrollToTarget(link);
  return (
    <motion.a
      onClick={link.startsWith("#") ? handleOnClick : undefined}
      href={link.startsWith("#") ? "javascript:void(0)" : link}
      initial={"initial"}
      whileHover={"hover"}
      rel="noopener noreferrer"
      className="rounded-[56px] relative overflow-hidden border border-WHITE px-6 py-4 w-full text-lg flex items-center justify-center max-md:py-6 max-md:text-xl max-[420px]:py-4 max-[420px]:text-lg"
    >
      <span className="opacity-0">{title}</span>
      <motion.span variants={textVariants} className="absolute top-[50%]">
        {title}
      </motion.span>
      <motion.span
        variants={duplicateVariants}
        className="absolute top-[100%] w-full h-full bg-WHITE text-LIGHTBLACK font-bold rounded-[56px] flex items-center justify-center"
      >
        {title}
      </motion.span>
    </motion.a>
  );
};
export default CTA;
