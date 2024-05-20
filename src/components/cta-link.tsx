"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import variants from "@/variants/cta.variants";

interface CTALinkProps {
  title: string;
  href: string;
  width?: string;
  fullWidthOnMobile?: boolean;
  extendedPaddingOnMobile?: boolean;
  breakpoint?: {
    value: number;
    width: string;
  };
}

const CTALink = ({ title, href, width, fullWidthOnMobile, breakpoint, extendedPaddingOnMobile }: CTALinkProps) => {
  const isBreakpoint = useMediaQuery(`(max-width: ${breakpoint?.value || 0}px)`);
  return (
    <motion.div
      className={`gradient-shift flex items-center justify-center w-fit p-[1px] bg-STROKE_GRADIENT_SHIFT rounded-[100px] ${
        fullWidthOnMobile ? "max-[500px]:w-full" : ""
      }`}
      style={{ width: isBreakpoint ? breakpoint?.width : width }}
      variants={variants}
      initial={"initial"}
      whileHover={"hover"}
    >
      <Link href={href} className="w-full">
        <motion.div
          className={`gradient-shift cta-btn rounded-[100px] px-10 ${
            extendedPaddingOnMobile ? "py-6" : "py-[10px]"
          } bg-GRADIENT_SHIFT flex items-center justify-center w-full ${extendedPaddingOnMobile ? "max-md:py-6" : ""}`}
          variants={variants}
          initial={"initial"}
          whileHover={"hover"}
        >
          <span className="font-medium text-lg w-fit h-fit max-md:text-xl max-[420px]:text-lg">{title}</span>
        </motion.div>
      </Link>
    </motion.div>
  );
};
export default CTALink;
