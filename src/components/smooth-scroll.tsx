//@ts-nocheck
"use client";

import { PropsWithChildren } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScroll({ children }: PropsWithChildren) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 3,
        easing: (t) => Math.min(1, 1.001 - Math.pow(4, -5 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
