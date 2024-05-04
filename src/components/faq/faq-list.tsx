"use client";

import FAQItem from "./faq-item";
import { useState } from "react";

const faqItems = [
  {
    question: "Who is the Mentorship for?",
    answer:
      "Anyone who wants to learn how to trade for themselves. Whether you know nothing about trading or have been in the markets for a while but really want to get serious about it. Our mentorship program is designed to take anyone who is willing to learn and teach them to trade for themselves.",
  },
  {
    question: "Is it true that 90% of traders lose money?",
    answer:
      "Yes. This is because the vast majority of new traders go into trading without learning first. It’s like letting a doctor operate without any training. Wouldn’t go very well would it? At Avium we provide that much needed education to help you join the 10% of winners.",
  },
  {
    question: "Why would you run a Mentorship if you’re so successful?",
    answer:
      "A few reasons, firstly, we love trading and by extension telling people about it. One of the most satisfying feelings is seeing someone win and improving their situation using the things you taught them. Secondly, there is a lot of downtime with trading, time simply spent waiting, we think it’s better to fill that time with something productive.",
  },
];

const FAQList = () => {
  const [opened, setOpened] = useState<number>(0);
  return (
    <div className="max-w-[1000px] w-full flex flex-col gap-4">
      {faqItems.map((item, index) => (
        <div key={index} onClick={() => setOpened(index)}>
          <FAQItem {...item} isOpen={index === opened} />
        </div>
      ))}
    </div>
  );
};
export default FAQList;
