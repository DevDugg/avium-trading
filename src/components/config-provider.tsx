"use client";

import { MotionConfig } from "framer-motion";
import { PropsWithChildren } from "react";

const ConfigProvider = ({ children }: PropsWithChildren) => {
  return (
    <MotionConfig
      transition={{
        ease: [0.16, 1, 0.3, 1],
        duration: 0.9,
        type: "tween",
        stiffness: 210,
      }}
    >
      {children}
    </MotionConfig>
  );
};
export default ConfigProvider;
