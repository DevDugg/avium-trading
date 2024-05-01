import CTA from "./cta";
import Feature from "./feature";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price?: string;
  note: string;
  features: string[];
}

const PricingCard = ({ features, note, subtitle, title, price }: PricingCardProps) => {
  return (
    <div className="pricing-card px-6 py-10 rounded-3xl flex flex-col gap-6 bg-LIGHTBLACK">
      <div className="flex flex-col gap-2">
        <h3 className="text-H3 font-bold">{title}</h3>
        <p className="text-lg text-GRAY">{subtitle}</p>
      </div>
      <div className="flex flex-col gap-2">
        {price ? (
          <div className="flex items-center gap-6 w-fit">
            <span className="text-[48px]">{price}</span>
            <span className="text-lg text-GRAY">{note}</span>
          </div>
        ) : (
          <span className="text-[48px]">{note}</span>
        )}
      </div>
      <CTA link="#" title="Get started" />
      <div className="flex flex-col gap-4">
        <span className="font-medium text-2xl">Features</span>
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
