import Container from "../container";
import Logo from "../logo";
import Navigation from "../navigation";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="flex justify-between items-center pb-10">
        <div className="flex flex-col gap-2">
          <Logo />
          <div className="flex flex-col gap-1 text-lg">
            <span>© Avium</span>
            <span className="text-GRAY">All rights reserved {new Date().getFullYear()}</span>
          </div>
        </div>
        <Navigation />
      </Container>
    </footer>
  );
};
export default Footer;
