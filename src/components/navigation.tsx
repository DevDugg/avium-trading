import HeaderLink from "./header/header-link";

const headerLinks = [
  // { name: "Benefits", href: "#benefits" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  // { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="flex items-center gap-6 max-md:gap-10 max-sm:gap-4">
        {headerLinks.map((link) => (
          <HeaderLink key={link.name} title={link.name} href={link.href} />
        ))}
      </div>
    </nav>
  );
};
export default Navigation;
