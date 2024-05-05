"use client";

import { useRef, useState } from "react";

import Link from "next/link";
import headerVariants from "@/variants/header.variants";
import { motion } from "framer-motion";
import { useScrollToTarget } from "@/lib/use-scroll-to-target";

interface HeaderLinkProps {
  title: string;
  href: string;
}

const HeaderLink = ({ title, href }: HeaderLinkProps) => {
  const [hovered, setHovered] = useState(false);
  // const ref = useRef(null);
  const { handleOnClick } = useScrollToTarget(href);
  return (
    <motion.div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-fit text-BASE relative"
      variants={headerVariants}
      initial={"blockInitial"}
      animate={hovered ? "blockHover" : "blockInitial"}
    >
      <Link href={href} className="py-3" onClick={handleOnClick}>
        {title}
      </Link>
      <motion.div
        className="absolute top-[110%] border-b border-GRAY w-full"
        variants={headerVariants}
        initial={"childInitial"}
        animate={hovered ? "childHover" : "childInitial"}
      ></motion.div>
    </motion.div>
  );
};
export default HeaderLink;
