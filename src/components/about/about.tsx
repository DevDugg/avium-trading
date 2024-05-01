import CTALink from "../cta-link";
import Container from "../container";
import Image from "next/image";

const About = () => {
  return (
    <section className="about" id="about">
      <Container className="flex gap-20 items-center">
        <Image
          src="/images/about.png"
          alt="About"
          width={610}
          height={565}
          className="aspect-auto max-w-[610px] w-full"
        />
        <div className="flex flex-col gap-10">
          <h2 className="text-H2 pb-2">Your path to success</h2>
          <div className="flex gap-4">
            <p className="text-lg">
              Do you feel lost in trading? You’re just starting out and everything is overwhelming, or you’ve been
              trying but you don’t know why it’s just not working? Most traders trade without a proper strategy. As a
              result you’re likely to make many costly mistakes and get frustrated with trading and that frustration
              only leads to worse decisions. Trading isn’t easy, but we’re here to guide you through it.
            </p>
          </div>
          <CTALink title="Get started" href="#pricing" />
        </div>
      </Container>
    </section>
  );
};
export default About;
