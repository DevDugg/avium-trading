import CTALink from "../cta-link";
import Container from "../container";
import Feature from "./feature";
import PricingCard from "./pricing-card";

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
  title: "1 on 1 Mentorship",
  subtitle:
    "Join our mentorship program, and in just 60 days, we'll teach you everything you need to trade on your own.",
  note: "Start trading better today!",
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
      <Container className="flex flex-col gap-12">
        <h3 className="text-H3 font-bold">Pricing</h3>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-THREE gap-2">
            {pricingCards.map((card, index) => (
              <PricingCard key={index} {...card} />
            ))}
          </div>
          <div className="pricing-card-big px-6 py-10 rounded-3xl bg-LIGHTBLACK grid grid-cols-TWO">
            <div className="flex flex-col gap-10 justify-between">
              <div className="flex flex-col gap-6">
                <h2 className="text-H2 font-bold">{pricingCardBig.title}</h2>
                <p className="text-GRAY text-lg">{pricingCardBig.subtitle}</p>
              </div>
              <CTALink href="#" title="Book a call" />
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
        </div>
      </Container>
    </section>
  );
};
export default Pricing;
