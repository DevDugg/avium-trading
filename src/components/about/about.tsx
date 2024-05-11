import AnimateInView from "../animate-in-view";
import CTALink from "../cta-link";
import Container from "../container";
import Image from "next/image";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <AnimateInView {...defaultScrollVariants}>
          <div className="flex gap-20 items-center max-xl:flex-col max-xl:items-start max-xl:gap-10">
            <Image
              src="/images/about.png"
              alt="About"
              width={610}
              height={565}
              className="aspect-auto max-w-[610px] w-full max-xl:hidden"
            />
            <Image
              src="/images/about_mobile.png"
              alt="About"
              width={992}
              height={480}
              className="hidden aspect-auto w-full object-contain max-xl:block"
            />
            <div className="flex flex-col gap-10 max-xl:gap-6">
              <h2 className="text-H2 pb-2 font-bold max-lg:pb-0 max-lg:text-[32px] max-md:text-2xl">
                Your path to success
              </h2>
              <div className="flex flex-col gap-4 text-lg max-lg:text-BASE max-sm:gap-2">
                <p>
                  {`Avium was created by traders who wanted to teach trading the right way. We believe everyone can learn to trade successfully, as long as they're willing to try. With countless hours of experience both trading and teaching, we're here to help you focus your efforts, avoid common mistakes and become self-sufficient.`}
                </p>
                <p>
                  {`We know trading can be tough because we've been through it ourselves. From chasing the highs and selling the lows to taking revenge trades, we've made our share of errors. It took us years to learn, but now we're here to make it simpler for you.`}
                </p>
                <p>
                  {`That's why at Avium, we focus on helping those who are truly committed to learning. We believe anyone can become a successful trader with dedication and effort. Let us guide you every step of the way to trading success!`}
                </p>
              </div>
              <CTALink title="Get started" href="#pricing" fullWidthOnMobile />
            </div>
          </div>
        </AnimateInView>
      </Container>
    </section>
  );
};
export default About;
