"use client";

import AnimateInView from "../animate-in-view";
import Guarantee from "./guarantee";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";
import { useState } from "react";

const guarantees = [
  {
    number: 5,
    name: "Students",
    description: "More than 5 students have gone through our mentorship programs.",
  },
  {
    number: 5,
    name: "Succesful Traders",
    description: "Out of the 5 students we've taught 5 are now making money trading",
  },
  {
    number: "10/10",
    name: "Challenges",
    description: "When asking all our students we got an average rating of 10/10",
  },
];

const GuaranteeList = () => {
  const [hoveredNumber, setHoveredNumber] = useState<number | null>(null);
  return (
    <>
      {guarantees.map((guarantee, index) => (
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
