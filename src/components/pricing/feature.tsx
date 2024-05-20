import Image from "next/image";

interface FeatureProps {
  title: string;
}

const Feature = ({ title }: FeatureProps) => {
  return (
    <div className="feature flex items-start gap-2">
      <Image
        src="/images/feature.svg"
        alt="Check"
        width={20}
        height={20}
        className="mt-0.5 max-[420px]:size-4 max-[420px]:mt-[3px]"
      />
      <p className="text-lg leading-snug max-[420px]:text-BASE">{title}</p>
    </div>
  );
};
export default Feature;
