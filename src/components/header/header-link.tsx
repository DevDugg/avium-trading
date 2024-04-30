"use client";

import Link from "next/link";
import colors from "@/colors";
import { motion } from "framer-motion";

interface HeaderLinkProps {
  title: string;
  href: string;
}

const HeaderLink = ({ title, href }: HeaderLinkProps) => {
  return (
    <motion.div className="w-fit text-BASE" initial={{ color: colors.WHITE }} whileHover={{ color: colors.GRAY }}>
      <Link href={href} className="py-3">
        {title}
      </Link>
    </motion.div>
  );
};
export default HeaderLink;
