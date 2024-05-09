"use client";

import { FC } from "react";
import colors from "@/colors";
import { motion } from "framer-motion";

interface XProps {
  size?: string;
  isHovered: boolean;
}

const X: FC<XProps> = ({ isHovered, size }: XProps) => {
  return (
    <motion.svg
      width={size || 24}
      height={size || 24}
      viewBox={`0 0 ${size || 24}${size || 24}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g clipPath="url(#clip0_672_4)">
        <motion.rect
          y="0.5"
          width="24"
          height="24"
          rx="12"
          initial={{ fill: colors.WHITE }}
          animate={isHovered ? { fill: colors.GRAY } : {}}
        />
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.00159 5.09375H3.89062L9.95039 13.098L4.27828 19.8125H6.89897L11.189 14.7341L14.9984 19.7658H20.1094L13.8735 11.5289L13.8846 11.5431L19.2537 5.18722H16.633L12.6458 9.90725L9.00159 5.09375ZM6.7118 6.49555H8.30292L17.2882 18.364H15.6971L6.7118 6.49555Z"
          fill="#0A0B0F"
        />
      </motion.g>
      <motion.defs>
        <clipPath id="clip0_672_4">
          <rect y="0.5" width="24" height="24" rx="12" fill="white" />
        </clipPath>
      </motion.defs>
    </motion.svg>
  );
};
export default X;
