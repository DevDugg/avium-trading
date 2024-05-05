"use client";

import { useLenis } from "@studio-freight/react-lenis";

// Function for smooth scrolling
export const useScrollToTarget = (targetElement: string | number | HTMLElement | null) => {
  const lenisInstance = useLenis();
  const handleOnClick = () => {
    if (targetElement) {
      const scrollToOptions = {
        // Customize scroll options if needed
        lerp: 0.1,
        duration: 3,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(4, -5 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        lock: false,
        force: false,
      };

      lenisInstance!.scrollTo(targetElement, scrollToOptions);
    }
  };
  return { handleOnClick };
};
