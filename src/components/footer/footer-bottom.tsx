import Discord from "../icons/discord";
import Link from "next/link";
import SocialLink from "./social-link";
import X from "../icons/x";

const footerLinks = [
  {
    name: "X (Twitter)",
    Icon: X,
    href: "https://twitter.com/PidgeonTrades",
  },
  {
    name: "Discord",
    Icon: Discord,
    href: "https://discord.gg/NkAzCS5Ggt",
  },
];

const FooterBottom = () => {
  return (
    <div className="footer-bottom flex gap-6 justify-between items-center max-md:flex-col-reverse">
      <div className="flex gap-6 text-lg text-GRAY">
        <Link href={"/tos"}>Terms Of Service</Link>
        <Link href={"/privacy-policy"}>Privacy Policy</Link>
      </div>
      <div className="flex gap-10 items-center">
        {footerLinks.map((link, index) => (
          <SocialLink key={index} {...link} />
        ))}
      </div>
    </div>
  );
};
export default FooterBottom;
