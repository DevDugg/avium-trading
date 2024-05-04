import { Variants } from "framer-motion";
import colors from "@/colors";

const variants: Variants = {
  blockInitial: { color: colors.WHITE },
  blockHover: { color: colors.GRAY },
  childInitial: {
    transformOrigin: "bottom right",
    scaleX: 0,
  },
  childHover: {
    transformOrigin: "bottom left",
    scaleX: 1,
  },
};

export default variants;
