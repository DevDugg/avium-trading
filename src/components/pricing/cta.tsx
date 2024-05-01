interface CTAProps {
  title: string;
  link: string;
}

const CTA = ({ link, title }: CTAProps) => {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      className="rounded-[56px] border border-WHITE px-6 py-4 w-full text-lg flex items-center justify-center"
    >
      {title}
    </a>
  );
};
export default CTA;
