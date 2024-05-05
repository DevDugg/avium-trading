import { Variants } from "framer-motion";

export const textVariants: Variants = {
  initial: {
    top: "50%",
    y: "-50%",
    transformOrigin: "top",
    rotateX: "0deg",
    animationFillMode: "forwards",
    willChange: "transform",
  },

  hover: {
    top: "0%",
    rotateX: "90deg",
  },
};

export const duplicateVariants: Variants = {
  initial: {
    top: "150%",
    y: "-50%",
    transformOrigin: "bottom",
    rotateX: "90deg",
    animationFillMode: "forwards",
    willChange: "transform",
  },
  hover: {
    top: "50%",
    rotateX: "0deg",
    animationFillMode: "forwards",
    willChange: "transform",
  },
};
