interface SectionTitleProps {
  children: string;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return <h2 className="text-H2 font-bold text-center">{children}</h2>;
};
export default SectionTitle;
