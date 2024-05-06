"use client";

import Image from "next/image";
import Logo from "@/components/logo";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

const Loader = ({ children }: PropsWithChildren) => {
  return (
    <>
      <motion.div
        className="loader fixed top-0 left-0 z-50 w-full h-full flex items-center gap-6 justify-center bg-BACKGROUND pointer-events-none"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: "5%" }}
        transition={{
          ease: [0.16, 1, 0.3, 1],
          duration: 0.9,
          type: "tween",
          stiffness: 210,
          delay: 1,
        }}
      >
        <Logo size={80} />
        <Image alt="avium" src="/images/avium.svg" width={140} height={80} loading="eager" priority />
      </motion.div>
      {children}
    </>
  );
};
export default Loader;
