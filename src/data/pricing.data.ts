export const pricingData = {
  title: "Pricing",
  subtitle_1: "Trading mentorship",
  subtitle_2: "1 - on - 1",

  smallPricingCards: [
    //   These objects can have 2 options:
    //   1. Contains price - if the pricing is not included, the note will be big
    //   2. Doesn't contain price - if the pricing is not included, the note will be small
    {
      title: "Basic",
      subtitle: "Great for portfolio reviews",
      price: "$300",
      note: "per hour",
      features: ["1 Session at a time"],
      cta: {
        text: "Get started",
        link: "#pricing",
      },
    },
    {
      title: "Optimal",
      subtitle: "Great for portfolio reviews",
      price: "$275",
      note: "per session",
      features: ["5-10 Sessions at a time"],
      cta: {
        text: "Get started",
        link: "#pricing",
      },
    },
    {
      title: "Experienced",
      subtitle: "5-10 Sessions at a time",
      note: "Custom rate",
      features: ["10+ Sessions"],
      cta: {
        text: "Get started",
        link: "#pricing",
      },
    },
  ],
  pricingCardBig: {
    title: "The Avium Mentorship",
    cta: {
      text: "Book a call",
      link: "#pricing",
    },
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
  },
};
