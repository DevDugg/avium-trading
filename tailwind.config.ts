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
        BACKGROUND: "#040104",
        BLACK: "#1E1D1C",
        WHITE: "#FDFAFE",
        LIGHTBLACK: "#1D1D1D",
        BORDER: "#F4F4F6",
        ACCENT: "#9695DF",
        GRAY: "#91908C",
        RED: "#CA2422",
      },
      backgroundImage: {
        GRADIENT: "linear-gradient(75.55deg, #8F72EC 20.49%, #5636C1 47.34%, #3C2396 79.41%)",
        STROKE_GRADIENT: "linear-gradient(116.65deg, #FFFFFF 0%, rgba(204, 200, 255, 0.5) 53%, #CCC8FF 100%)",
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
    },
  },
  plugins: [],
};
export default config;
