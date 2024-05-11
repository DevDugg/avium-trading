import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        BACKGROUND: "#0A0B0F",
        BLACK: "#1E1D1C",
        WHITE: "#FDFAFE",
        LIGHTBLACK: "#14161F",
        LIGHTBLACK_HOVER: "#1A1C25",
        BORDER: "#F4F4F6",
        ACCENT: "#9695DF",
        GRAY: "#91908C",
        RED: "#CA2422",
      },
      backgroundImage: {
        GRADIENT: "linear-gradient(75.55deg, #8F72EC 20.49%, #5636C1 47.34%, #3C2396 79.41%)",
        GRADIENT_SHIFT:
          "linear-gradient(75.55deg, #8F72EC 20.49%, #5636C1 47.34%, #3C2396 79.41%), linear-gradient(75.55deg, #3C2396 79.41%, #5636C1 47.34%, #8F72EC 20.49%)",
        STROKE_GRADIENT: "linear-gradient(116.65deg, #FFFFFF 0%, rgba(204, 200, 255, 0.5) 53%, #CCC8FF 100%)",
        STROKE_GRADIENT_SHIFT:
          "linear-gradient(116.65deg, #FFFFFF 0%, rgba(204, 200, 255, 0.5) 53%, #CCC8FF 100%), linear-gradient(116.65deg, #CCC8FF 100%, rgba(204, 200, 255, 0.5) 53%, #FFFFFF 0%)",
        TESTIMONIALS: "linear-gradient(180deg, #0A0B0F 0%, rgba(4, 1, 4, 0) 50%, #0A0B0F 100%);",
      },
      fontSize: {
        CARD_TITLE: "80px",
        H1: "80px",
        H2: "48px",
        H3: "24px",
        BASE: "16px",
      },
      lineHeight: {
        CARD_TITLE: "112px",
        H1: "100%",
        H2: "120%",
        H3: "normal",
        BASE: "normal",
      },
      gridTemplateColumns: {
        FOUR: "repeat(4, 1fr)",
        THREE: "repeat(3, 1fr)",
        TWO: "repeat(2, 1fr)",
      },
    },
  },
  plugins: [],
};
export default config;
