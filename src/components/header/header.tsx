import HeaderLink from "./header-link";
import Logo from "../logo";

const headerLinks = [
  { name: "Benefits", href: "#benefits" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="flex items-center justify-between gap-6">
        <Logo />
        <div className="flex items-center gap-6">
          {headerLinks.map((link) => (
            <HeaderLink key={link.name} title={link.name} href={link.href} />
          ))}
        </div>
      </div>
    </header>
  );
};
export default Header;
