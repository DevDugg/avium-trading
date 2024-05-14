"use client";

import { AnimationProps, TargetAndTransition, VariantLabels, motion } from "framer-motion";

import { PropsWithChildren } from "react";
import { generalData } from "@/data/general.data";
import { useInView } from "react-intersection-observer";

interface Props extends PropsWithChildren {
  initialVariant: AnimationProps["initial"];
  inViewVariant: VariantLabels | TargetAndTransition | undefined;
  threshold?: number;
  transition?: AnimationProps["transition"];
  height?: string;
}

const AnimateInView = ({ children, inViewVariant, initialVariant, threshold = 0.1, transition, height }: Props) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={inView && generalData.useScrollAnimations ? initialVariant : {}}
      animate={inView && generalData.useScrollAnimations ? inViewVariant : {}}
      transition={{
        ease: [0.16, 1, 0.3, 1],
        duration: 0.9,
        type: "tween",
        stiffness: 210,
        ...transition,
      }}
      style={{ height }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateInView;
