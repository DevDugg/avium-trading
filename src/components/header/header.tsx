import Logo from "../logo";
import Navigation from "../navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="flex items-center justify-between gap-6">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
export default Header;
