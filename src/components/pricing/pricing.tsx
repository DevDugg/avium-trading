import AnimateInView from "../animate-in-view";
import CTALink from "../cta-link";
import Feature from "./feature";
import PricingCard from "./pricing-card";
import SectionContainer from "../structure/section-container";
import SectionTitle from "../structure/section-title";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";

const pricingCards = [
  {
    title: "Basic",
    subtitle: "Great for portfolio reviews",
    price: "$300",
    note: "per hour",
    features: ["1 Session at a time"],
  },
  {
    title: "Optimal",
    subtitle: "Great for portfolio reviews",
    price: "$275",
    note: "per session",
    features: ["5-10 Sessions at a time"],
  },
  {
    title: "Experienced",
    subtitle: "5-10 Sessions at a time",
    note: "Custom rate",
    features: ["10+ Sessions"],
  },
];

const pricingCardBig = {
  title: "The Avium Mentorship",
  subtitle:
    "Ready to trade smarter and win? Our seasoned mentors are ready to show you the ropes. Whether you're a beginner or struggling, in just 60 days we'll simplify the market for you and help you design your winning strategies.",
  features: [
    "18 Livestreams covering everything from core trading principles to advanced techniques for trading and investing.",
    "Five 1-on-1 sessions with one of our mentors",
    "Written trading guide covering the core content",
    "Daily charting challenges",
    "Access to a live chat with the mentors to ask questions",
    "Chat with other cohort members to learn together",
    "Trading Log & Backtesting Templates",
  ],
};

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <SectionContainer>
        <AnimateInView {...defaultScrollVariants}>
          <SectionTitle>Pricing</SectionTitle>
        </AnimateInView>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h3 className="text-H3 font-bold">Trading mentorship</h3>
            <AnimateInView {...defaultScrollVariants}>
              <div className="pricing-card-big px-6 py-10 rounded-3xl bg-LIGHTBLACK grid grid-cols-TWO">
                <div className="flex flex-col gap-10 justify-between">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-H2 font-bold">{pricingCardBig.title}</h2>
                    <p className="text-GRAY text-lg">{pricingCardBig.subtitle}</p>
                  </div>
                  <CTALink href="#" title="Book a call" width="380px" />
                </div>
                <div className="flex flex-col gap-4">
                  <span className="font-medium text-2xl">Features</span>
                  <div className="flex flex-col gap-4">
                    {pricingCardBig.features.map((feature, index) => (
                      <Feature key={index} title={feature} />
                    ))}
                  </div>
                </div>
              </div>
            </AnimateInView>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-H3 font-bold">1 - on - 1</h3>
            <p className="text-lg">
              Looking for something more personalized without the commitment? Book a 1-on-1 call!
            </p>
            <div className="grid grid-cols-THREE gap-2">
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
