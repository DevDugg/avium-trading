"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import variants from "@/variants/cta.variants";

interface CTALinkProps {
  title: string;
  href: string;
  width?: string;
  fullWidthOnMobile?: boolean;
}

const CTALink = ({ title, href, width, fullWidthOnMobile }: CTALinkProps) => {
  return (
    <motion.div
      className={`gradient-shift flex items-center justify-center w-fit p-[1px] bg-STROKE_GRADIENT_SHIFT rounded-[100px] ${
        fullWidthOnMobile ? "max-[500px]:w-full" : ""
      }`}
      style={{ width }}
      variants={variants}
      initial={"initial"}
      whileHover={"hover"}
    >
      <Link href={href} className="w-full">
        <motion.div
          className="gradient-shift cta-btn rounded-[100px] px-10 py-[10px] bg-GRADIENT_SHIFT flex items-center justify-center w-full"
          variants={variants}
          initial={"initial"}
          whileHover={"hover"}
        >
          <span className="font-medium text-lg w-fit h-fit max-md:text-xl">{title}</span>
        </motion.div>
      </Link>
    </motion.div>
  );
};
export default CTALink;
