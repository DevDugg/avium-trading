export const pricingData = {
  title: "Our Products",
  subtitle_1: "Trading Mentorship",
  subtitle_2: "1 - on - 1  Programs",

   smallPricingCards: [
    //   These objects can have 2 options:
    //   1. Contains price - if the pricing is not included, the note will be big
    //   2. Doesn't contain price - if the pricing is not included, the note will be small
   {
      title: "Basic",
      subtitle: "Learn at your own pace",
      price: "$166-300",
      note: "per session",
      features: ["5 Session Minimum", "Portfolio Reviews", "Trading Education"],
      cta: {
        text: "Book a Call",
        link: "https://cal.com/pidgeontrades/1-on-1-session",
      },
    },
    /*{
      title: "Optimal",
      subtitle: "Personalized Curriculum",
      price: "<$275",
      note: "per session",
      features: ["5 or more Sessions at a time", "Personalized Curriculums"],
      cta: {
        text: "Get started",
        link: "https://forms.gle/ZfZVK1SQxNuZ67a18",
      },
    },*/
    {
      title: "Advanced",
      subtitle: "Looking for something specific? Customized Programs at Request",
      note: "Custom rate",
      features: ["Retainers", "Customized Programs", "Stacking Discounts",],
      cta: {
        text: "Book a Call",
        link: "https://forms.gle/ZfZVK1SQxNuZ67a18",
      },
    },
  ],
  pricingCardBig: {
    title: "The Avium Mentorship",
    cta: {
      text: "Book a Call",
      link: "#contact",
    },
    subtitle:
      "Are you ready to become a winner? Our seasoned mentors are here to show you the ropes. Whether you're a beginner or you've been trying to learn for a while, in just 60 days we'll simplify the market for you and help you build your winning strategies.",
    features: [
      "18 Livestreams covering everything from core trading principles to advanced techniques for trading and investing.",
      "Three 1-on-1 sessions with one of our mentors",
      "Written trading guide covering the core content",
      "A discord chat with the mentors to ask questions",
      "And much more!"
    ],
  },
};
