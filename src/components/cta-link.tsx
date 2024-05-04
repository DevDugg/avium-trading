"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTALinkProps {
  title: string;
  href: string;
  width?: string;
}

const variants = {
  initial: {
    backgroundPositionX: "0%",
    backgroundPositionY: "0%",
  },
  hover: {
    backgroundPositionX: "100%",
  },
};

const CTALink = ({ title, href, width }: CTALinkProps) => {
  return (
    <motion.div
      className="gradient-shift flex items-center justify-center w-fit p-[1px] bg-STROKE_GRADIENT_SHIFT rounded-[100px]"
      style={{ width }}
      variants={variants}
      initial={"initial"}
      whileHover={"hover"}
    >
      <Link href={href}>
        <motion.div
          className="gradient-shift cta-btn rounded-[100px] px-10 py-[10px] bg-GRADIENT_SHIFT flex items-center justify-center w-full"
          variants={variants}
          initial={"initial"}
          whileHover={"hover"}
        >
          <span className="font-medium text-lg w-fit h-fit">{title}</span>
        </motion.div>
      </Link>
    </motion.div>
  );
};
export default CTALink;
