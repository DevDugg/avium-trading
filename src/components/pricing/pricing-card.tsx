import CTA from "./cta";
import Feature from "./feature";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price?: string;
  note: string;
  features: string[];
  cta: {
    text: string;
    link: string;
  };
}

const PricingCard = ({ features, note, subtitle, title, price, cta }: PricingCardProps) => {
  return (
    <div className="pricing-card px-6 py-10 rounded-3xl flex flex-col gap-6 bg-LIGHTBLACK max-[1090px]:gap-8 max-[420px]:p-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-H3 font-bold max-[420px]:text-lg">{title}</h3>
        <p className="text-lg text-GRAY max-[420px]:text-BASE">{subtitle}</p>
      </div>
      <div className="flex flex-col gap-2">
        {price ? (
          <div className="flex items-center gap-6 w-fit">
            <span className="text-[48px] max-[420px]:text-[32px]">{price}</span>
            <span className="text-lg text-GRAY max-[420px]:text-BASE">{note}</span>
          </div>
        ) : (
          <span className="text-[48px] max-[420px]:text-[32px]">{note}</span>
        )}
      </div>
      <CTA link={cta.link} title={cta.text} />
      <div className="flex flex-col gap-4">
        <span className="font-medium text-2xl max-[420px]:text-xl">Features</span>
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <Feature key={index} title={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PricingCard;
