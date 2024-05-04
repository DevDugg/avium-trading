"use client";

import Guarantee from "./guarantee";
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
        <div key={index} onMouseOver={() => setHoveredNumber(index)} onMouseLeave={() => setHoveredNumber(null)}>
          <Guarantee {...guarantee} position={index} hoveredNumber={hoveredNumber} />
        </div>
      ))}
    </>
  );
};
export default GuaranteeList;
