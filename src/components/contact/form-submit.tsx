"use client";

import { motion } from "framer-motion";
import variants from "@/variants/cta.variants";

interface FormSubmitProps {
  title: string;
  width?: string;
}

const FormSubmit = ({ title, width }: FormSubmitProps) => {
  return (
    <motion.div
      className="gradient-shift flex items-center justify-center w-fit p-[1px] bg-STROKE_GRADIENT_SHIFT rounded-[100px]"
      style={{ width }}
      variants={variants}
      initial={"initial"}
      whileHover={"hover"}
    >
      <motion.button
        type="submit"
        className="cta-btn gradient-shift cta-btn rounded-[100px] px-10 py-[10px] bg-GRADIENT_SHIFT flex items-center justify-center w-full"
        variants={variants}
        initial={"initial"}
        whileHover={"hover"}
      >
        <span className="font-medium text-lg w-fit h-fit">{title}</span>
      </motion.button>
    </motion.div>
  );
};
export default FormSubmit;
