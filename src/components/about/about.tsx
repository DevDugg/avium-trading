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
          <div className="flex flex-col gap-4">
            <p className="text-lg">
              {`At Avium we teach trading the right way.
              The majority of people were just looking to “get rich quick”.
              Despite our efforts, they didn't really want to learn and often lost everything.`}
            </p>
            <p className="text-lg">
              {`We understand the challenges of trading because we've faced them.
              From chasing highs to panicking and wiping out accounts with revenge trades, we've been there.
              Our own painful experiences drive us to prevent others from repeating these mistakes.
              After years of learning the hard way, we're here to guide you away from the same pitfalls.`}
            </p>
            <p className="text-lg">
              {`That's why at Avium, we're focusing on working closely with those who are truly committed to learning.
              We firmly believe that anyone can master trading with dedication and effort. 
              With our personalized approach, we're here to guide you every step of the way.`}
            </p>
          </div>
          <CTALink title="Get started" href="#pricing" />
        </div>
      </Container>
    </section>
  );
};
export default About;
