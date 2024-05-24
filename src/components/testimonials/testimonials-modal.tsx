"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { TestimonialProps } from "./testimonial";
import { motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";

interface TestimonialsModalProps {
  modalIndex: TestimonialProps | null;
  setModalIndex: (index: TestimonialsModalProps["modalIndex"]) => void;
}

const TestimonialsModal = ({ modalIndex, setModalIndex }: TestimonialsModalProps) => {
  const modalRef = useRef(null);
  const [lastModal, setLastModal] = useState(modalIndex || { avatar: "", name: "", email: "", content: "" });
  const { avatar, name, email, content } = modalIndex || lastModal;

  useEffect(() => {
    if (!modalIndex) return;

    setLastModal(modalIndex);
  }, [modalIndex]);

  useOnClickOutside(modalRef, () => setModalIndex(null));

  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-dvh bg-MODALBG flex justify-center items-center z-50 py-12 px-3"
      data-lenis-prevent
      initial={{ opacity: 0 }}
      animate={{ opacity: modalIndex ? 1 : 0 }}
      style={{ pointerEvents: modalIndex ? "all" : "none" }}
    >
      <div
        ref={modalRef}
        className="bg-[#14161F] rounded-2xl overflow-x-hidden relative py-6 px-10 flex flex-col gap-6 max-w-[800px] max-h-full pr-[10px]"
      >
        <Image
          src={"/images/close.svg"}
          alt="Close"
          width={24}
          height={24}
          className="absolute top-3 right-3 z-50 cursor-pointer"
          onClick={() => setModalIndex(null)}
        />
        <div className="flex items-center gap-6">
          <Image src={avatar} alt="Profile picture" width={40} height={40} className="rounded-full" />
          <div className="flex flex-col gap-1 text-lg">
            <span>{name}</span>
            <span className="text-GRAY">{email}</span>
          </div>
        </div>
        <p className="text-lg overflow-y-auto pr-6">{content}</p>
      </div>
    </motion.div>
  );
};
export default TestimonialsModal;
