import AnimateInView from "../animate-in-view";
import CTALink from "../cta-link";
import Feature from "./feature";
import PricingCard from "./pricing-card";
import PricingCardBig from "./pricing-card-big";
import SectionContainer from "../structure/section-container";
import SectionTitle from "../structure/section-title";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";
import { pricingData } from "@/data/pricing.data";

const Pricing = () => {
  const { smallPricingCards: pricingCards, subtitle_1, subtitle_2, title } = pricingData;
  return (
    <section className="pricing" id="pricing">
      <SectionContainer>
        <AnimateInView {...defaultScrollVariants}>
          <SectionTitle>{title}</SectionTitle>
        </AnimateInView>
        <div className="flex flex-col gap-12 max-lg:gap-10 max-[420px]:gap-6">
          <div className="flex flex-col gap-6">
            <h3 className="text-H3 font-bold max-lg:text-xl max-[420px]:hidden">{subtitle_1}</h3>
            <PricingCardBig />
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-H3 font-bold max-lg:text-xl max-[420px]:hidden">{subtitle_2}</h3>
            <div className="grid grid-cols-ONE gap-2 max-[1090px]:flex max-[1090px]:flex-col">
              {pricingCards.map((card, index) => (
                <AnimateInView key={index} {...defaultScrollVariants} transition={{ delay: 0.2 + 0.2 * index }}>
                  <PricingCard {...card} />
                </AnimateInView>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
export default Pricing;
