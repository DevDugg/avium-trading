"use client";

import FAQItem from "./faq-item";
import { useState } from "react";

const faqItems = [
  {
    question: "What do I get exactly?",
    answer:
      "Do you feel lost in trading? You’re just starting out and everything is overwhelming, or you’ve been trying but you don’t know why it’s just not working? Most traders trade without a proper strategy. As a result you’re likely to make many costly mistakes and get frustrated with trading and that frustration only leads to worse decisions. Trading isn’t easy, but we’re here to guide you through it.",
  },
  {
    question: "What do I get exactly?",
    answer:
      "Do you feel lost in trading? You’re just starting out and everything is overwhelming, or you’ve been trying but you don’t know why it’s just not working? Most traders trade without a proper strategy. As a result you’re likely to make many costly mistakes and get frustrated with trading and that frustration only leads to worse decisions. Trading isn’t easy, but we’re here to guide you through it.",
  },
  {
    question: "What do I get exactly?",
    answer:
      "Do you feel lost in trading? You’re just starting out and everything is overwhelming, or you’ve been trying but you don’t know why it’s just not working? Most traders trade without a proper strategy. As a result you’re likely to make many costly mistakes and get frustrated with trading and that frustration only leads to worse decisions. Trading isn’t easy, but we’re here to guide you through it.",
  },
  {
    question: "What do I get exactly?",
    answer:
      "Do you feel lost in trading? You’re just starting out and everything is overwhelming, or you’ve been trying but you don’t know why it’s just not working? Most traders trade without a proper strategy. As a result you’re likely to make many costly mistakes and get frustrated with trading and that frustration only leads to worse decisions. Trading isn’t easy, but we’re here to guide you through it.",
  },
  {
    question: "What do I get exactly?",
    answer:
      "Do you feel lost in trading? You’re just starting out and everything is overwhelming, or you’ve been trying but you don’t know why it’s just not working? Most traders trade without a proper strategy. As a result you’re likely to make many costly mistakes and get frustrated with trading and that frustration only leads to worse decisions. Trading isn’t easy, but we’re here to guide you through it.",
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
