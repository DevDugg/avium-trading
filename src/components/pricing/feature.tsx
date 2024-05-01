import Image from "next/image";

interface FeatureProps {
  title: string;
}

const Feature = ({ title }: FeatureProps) => {
  return (
    <div className="feature flex items-start gap-2">
      <Image src="/images/feature.svg" alt="Check" width={20} height={20} />
      <p className="text-lg leading-snug">{title}</p>
    </div>
  );
};
export default Feature;
