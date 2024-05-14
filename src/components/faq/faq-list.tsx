"use client";

import FAQItem from "./faq-item";
import { faqData } from "@/data/faq.data";
import { useState } from "react";

const FAQList = () => {
  const [opened, setOpened] = useState<number>(0);
  return (
    <div className="max-w-[1000px] w-full flex flex-col gap-4">
      {faqData.faqs.map((item, index) => (
        <div key={index} onClick={() => setOpened(index)}>
          <FAQItem {...item} isOpen={index === opened} />
        </div>
      ))}
    </div>
  );
};
export default FAQList;
