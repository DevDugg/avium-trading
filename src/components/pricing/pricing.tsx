import AnimateInView from "../animate-in-view";
import CTALink from "../cta-link";
import Feature from "./feature";
import PricingCard from "./pricing-card";
import SectionContainer from "../structure/section-container";
import SectionTitle from "../structure/section-title";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";
import { pricingData } from "@/data/pricing.data";

const Pricing = () => {
  const { pricingCardBig, smallPricingCards: pricingCards, subtitle_1, subtitle_2, title } = pricingData;
  return (
    <section className="pricing" id="pricing">
      <SectionContainer>
        <AnimateInView {...defaultScrollVariants}>
          <SectionTitle>{title}</SectionTitle>
        </AnimateInView>
        <div className="flex flex-col gap-12 max-lg:gap-10 max-[420px]:gap-6">
          <div className="flex flex-col gap-6">
            <h3 className="text-H3 font-bold max-lg:text-xl max-[420px]:hidden">{subtitle_1}</h3>
            <AnimateInView {...defaultScrollVariants}>
              <div
                id="mentorship"
                className="pricing-card-big px-6 py-10 rounded-3xl bg-LIGHTBLACK grid grid-cols-TWO gap-6 max-lg:flex max-lg:flex-col max-lg:gap-8 max-[420px]:py-6"
              >
                <div className="flex flex-col gap-10 justify-between max-[420px]:gap-6">
                  <div className="flex flex-col gap-6 max-[420px]:gap-4">
                    <h2 className="text-H2 font-bold max-[420px]:text-2xl">{pricingCardBig.title}</h2>
                    <p className="text-GRAY text-lg max-[420px]:text-BASE">{pricingCardBig.subtitle}</p>
                  </div>
                  <CTALink
                    href={pricingCardBig.cta.link}
                    title={pricingCardBig.cta.text}
                    width="100%"
                    // breakpoint={{ value: 1024, width: "100%" }}
                    // extendedPaddingOnMobile
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <span className="font-medium text-2xl max-[420px]:text-xl">Features</span>
                  <div className="flex flex-col gap-4">
                    {pricingCardBig.features.map((feature, index) => (
                      <Feature key={index} title={feature} />
                    ))}
                  </div>
                </div>
              </div>
            </AnimateInView>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-H3 font-bold max-lg:text-xl max-[420px]:hidden">{subtitle_2}</h3>
            <div className="grid grid-cols-THREE gap-2 max-[1090px]:flex max-[1090px]:flex-col">
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
