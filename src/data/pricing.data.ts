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
      note: "per session",
      features: ["1 Session at a time",
                "Portfolio Reviews"],
      cta: {
        text: "Get started",
        link: "#pricing",
      },
    },
    {
      title: "Optimal",
      subtitle: "Personalized Curriculum",
      price: "<$275",
      note: "per session",
      features: ["5 or more Sessions at a time",
                "Personalized Curriculums"],
      cta: {
        text: "Get started",
        link: "#pricing",
      },
    },
    {
      title: "Advanced",
      subtitle: "Customized Programs at Request",
      note: "Custom rate",
      features: ["Retainers",
                "Customized Programs"],
      cta: {
        text: "Contact Us",
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
