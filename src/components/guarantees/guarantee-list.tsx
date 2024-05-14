"use client";

import AnimateInView from "../animate-in-view";
import Guarantee from "./guarantee";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";
import { guaranteesData } from "@/data/guarantees.data";
import { useState } from "react";

const GuaranteeList = () => {
  const [hoveredNumber, setHoveredNumber] = useState<number | null>(null);
  return (
    <>
      {guaranteesData.guarantees.map((guarantee, index) => (
        <AnimateInView key={index} {...defaultScrollVariants} transition={{ delay: 0.2 + 0.2 * index }}>
          <div
            onMouseOver={() => setHoveredNumber(index)}
            onMouseLeave={() => setHoveredNumber(null)}
            className="h-full"
          >
            <Guarantee {...guarantee} position={index} hoveredNumber={hoveredNumber} />
          </div>
        </AnimateInView>
      ))}
    </>
  );
};
export default GuaranteeList;
