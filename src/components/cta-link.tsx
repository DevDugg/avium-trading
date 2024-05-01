"use client";

import Link from "next/link";

interface CTALinkProps {
  title: string;
  href: string;
  width?: string;
}

const CTALink = ({ title, href, width }: CTALinkProps) => {
  return (
    <div
      className="flex items-center justify-center w-fit p-[1px] bg-STROKE_GRADIENT rounded-[100px]"
      style={{ width }}
    >
      <Link
        type="button"
        className="cta-btn rounded-[100px] px-10 py-[10px] bg-GRADIENT flex items-center justify-center w-full"
        href={href}
      >
        <span className="font-medium text-BASE w-fit h-fit">{title}</span>
      </Link>
    </div>
  );
};
export default CTALink;
