"use client";

import Image from "next/image";
import colors from "@/colors";
import { motion } from "framer-motion";
import { testimonialVariants } from "@/variants/testimonial.variants";
import { useState } from "react";

export interface TestimonialProps {
  name: string;
  email: string;
  content: string;
  avatar: string;
}

interface Props extends TestimonialProps {
  setModalIndex: (index: TestimonialProps) => void;
}

const Testimonial = ({ avatar, content, email, name, setModalIndex }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <motion.div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="testimonial rounded-2xl bg-LIGHTBLACK p-6 flex flex-col gap-6 h-fit mb-4 relative -z-10 overflow-hidden cursor-pointer"
        initial="initial"
        whileHover={"hover"}
        onClick={() => {
          setModalIndex({ avatar, content, email, name });
        }}
      >
        <motion.div className="top-0 left-0 absolute bg-GRADIENT size-full" variants={testimonialVariants}></motion.div>
        <div className="flex items-center gap-6 z-10">
          <Image src={avatar} alt="Profile picture" width={40} height={40} className="rounded-full" />
          <div className="flex flex-col gap-1 text-lg">
            <span>{name}</span>
            <motion.span
              initial={{ color: colors.GRAY }}
              animate={isHovered ? { color: colors.WHITE } : {}}
              className="text-GRAY"
            >
              {email}
            </motion.span>
          </div>
        </div>
        <div className="h-fit z-10">
          <motion.p
            className="clamped-text text-GRAY text-lg"
            initial={{ color: colors.GRAY }}
            animate={isHovered ? { color: colors.WHITE } : {}}
          >
            {content}
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};
export default Testimonial;
