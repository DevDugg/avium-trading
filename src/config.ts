import colors from "./colors";

interface ConfigProps {
  appName: string;
  appDescription: string;
  domainName: string;
  colors: {
    theme: "light" | "dark";
    main: string;
  };
}

const config = {
  appName: "Avium",
  appDescription: "Unlock your Trading Potential with Personalized Mentorship and High-Quality Resources",
  domainName: "avium-xi.vercel.app",
  colors: {
    theme: "light",
    main: colors.ACCENT,
  },
} as ConfigProps;

export default config;
