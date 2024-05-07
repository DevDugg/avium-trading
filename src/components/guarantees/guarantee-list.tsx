"use client";

import AnimateInView from "../animate-in-view";
import Guarantee from "./guarantee";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";
import { useState } from "react";

const guarantees = [
  {
    number: 42,
    name: "Micro lessons",
  },
  {
    number: 36,
    name: "Workshops",
  },
  {
    number: 12,
    name: "Challenges",
  },
];

const GuaranteeList = () => {
  const [hoveredNumber, setHoveredNumber] = useState<number | null>(null);
  return (
    <>
      {guarantees.map((guarantee, index) => (
        <AnimateInView key={index} {...defaultScrollVariants} transition={{ delay: 0.2 + 0.2 * index }}>
          <div onMouseOver={() => setHoveredNumber(index)} onMouseLeave={() => setHoveredNumber(null)}>
            <Guarantee {...guarantee} position={index} hoveredNumber={hoveredNumber} />
          </div>
        </AnimateInView>
      ))}
    </>
  );
};
export default GuaranteeList;
