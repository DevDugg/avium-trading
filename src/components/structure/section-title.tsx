interface SectionTitleProps {
  children: string;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-H2 font-bold text-center max-lg:text-[32px] max-md:text-2xl max-[420px]:text-xl">{children}</h2>
  );
};
export default SectionTitle;
