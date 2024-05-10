"use client";

import { FC, useState } from "react";

import Image from "next/image";
import { XProps } from "../icons/discord";
import headerVariants from "@/variants/header.variants";
import { motion } from "framer-motion";

interface SocialLinkProps {
  Icon: FC<XProps>;
  name: string;
  href: string;
}

const SocialLink = ({ href, Icon, name }: SocialLinkProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-fit relative"
      // variants={headerVariants}
      // initial={"blockInitial"}
      // animate={hovered ? "blockHover" : "blockInitial"}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="flex gap-2">
        <div className="rounded-full overflow-hidden">
          <Icon isHovered={hovered} size="24" />
        </div>
        {/* <motion.span className="text-lg">{name}</motion.span> */}
      </div>
      {/* <motion.div
        className="absolute top-[110%] border-b border-GRAY w-full"
        variants={headerVariants}
        initial={"childInitial"}
        animate={hovered ? "childHover" : "childInitial"}
      ></motion.div> */}
    </motion.a>
  );
};
export default SocialLink;
