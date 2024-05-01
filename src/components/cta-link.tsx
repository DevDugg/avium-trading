"use client";

import Link from "next/link";

interface CTALinkProps {
  title: string;
  href: string;
}

const CTALink = ({ title, href }: CTALinkProps) => {
  return (
    <div className="flex items-center justify-center w-fit p-[1px] bg-STROKE_GRADIENT rounded-[100px]">
      <Link type="button" className="cta-btn rounded-[100px] px-10 py-[10px] bg-GRADIENT" href={href}>
        <span className="font-medium text-BASE">{title}</span>
      </Link>
    </div>
  );
};
export default CTALink;
