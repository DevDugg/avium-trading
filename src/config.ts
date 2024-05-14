import colors from "./colors";
import { generalData } from "./data/general.data";

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
  appName: generalData.appName,
  appDescription: generalData.appDescription,
  domainName: generalData.domainName,
  colors: {
    theme: "light",
    main: colors.ACCENT,
  },
} as ConfigProps;

export default config;
