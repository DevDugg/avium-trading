interface CTAProps {
  title: string;
  link: string;
}

import Link from "next/link";

const CTA = ({ link, title }: CTAProps) => {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      className="rounded-[56px] border border-WHITE px-6 py-4 w-full flex items-center justify-center"
    >
      {title}
    </a>
  );
};
export default CTA;
