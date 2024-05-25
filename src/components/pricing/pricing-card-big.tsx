"use client";

import AnimateInView from "../animate-in-view";
import CTALink from "../cta-link";
import Feature from "./feature";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";
import { pricingData } from "@/data/pricing.data";
import { useScrollToTarget } from "@/lib/use-scroll-to-target";

const PricingCardBig = () => {
  const { pricingCardBig } = pricingData;

  return (
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
          <CTALink href={pricingCardBig.cta.link} title={pricingCardBig.cta.text} width="100%" />
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
  );
};
export default PricingCardBig;
