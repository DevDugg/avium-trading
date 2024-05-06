"use client";

import { motion, useScroll } from "framer-motion";

import { ReactNode } from "react";
import config from "@/config";

interface IProps {
  children: ReactNode;
}

const ScrollProgress = ({ children }: IProps) => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: config.colors.main,
          transformOrigin: "0%",
          zIndex: 100,
          height: 3,
          mixBlendMode: "exclusion",
        }}
      ></motion.div>
      {children}
    </>
  );
};

export default ScrollProgress;
