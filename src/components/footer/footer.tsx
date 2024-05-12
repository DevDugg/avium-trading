import Container from "../container";
import FooterBottom from "./footer-bottom";
import Logo from "../logo";
import Navigation from "../navigation";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="flex flex-col gap-6 pb-10">
        <div className="flex justify-between items-center max-md:flex-col-reverse max-md:justify-normal max-md:gap-12">
          <div className="flex flex-col gap-2 max-md:flex-row max-md:items-center">
            <Logo />
            <div className="flex flex-col gap-1 text-lg">
              <span>© Avium</span>
              <span className="text-GRAY">All rights reserved {new Date().getFullYear()}</span>
            </div>
          </div>
          <Navigation isInFooter />
        </div>
        <FooterBottom />
      </Container>
    </footer>
  );
};
export default Footer;
