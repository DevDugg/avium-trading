"use client";

import { FC } from "react";
import colors from "@/colors";
import { motion } from "framer-motion";

interface XProps {
  isHovered: boolean;
}

const X: FC<XProps> = ({ isHovered }: XProps) => {
  return (
    <motion.svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.g clipPath="url(#clip0_688_2)">
        <motion.rect
          y="0.5"
          width="40"
          height="40"
          rx="20"
          initial={{ fill: colors.WHITE }}
          animate={isHovered ? { fill: colors.GRAY } : {}}
        />
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.0027 8.15625H6.48438L16.584 21.4966L7.13047 32.6875H11.4983L18.6484 24.2234L24.9973 32.6096H33.5156L23.1225 18.8816L23.1409 18.9052L32.0895 8.31203H27.7217L21.0763 16.1788L15.0027 8.15625ZM11.1863 10.4926H13.8382L28.8137 30.2733H26.1618L11.1863 10.4926Z"
          fill="#0A0B0F"
        />
      </motion.g>
      <motion.defs>
        <motion.clipPath id="clip0_688_2">
          <motion.rect y="0.5" width="40" height="40" rx="20" fill="white" />
        </motion.clipPath>
      </motion.defs>
    </motion.svg>
  );
};
export default X;
