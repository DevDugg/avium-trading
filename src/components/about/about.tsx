import AnimateInView from "../animate-in-view";
import CTALink from "../cta-link";
import Container from "../container";
import Image from "next/image";
import { aboutData } from "@/data/about.data";
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
                {aboutData.title}
              </h2>
              <div className="flex flex-col gap-4 text-lg max-lg:text-BASE max-sm:gap-2">
                {aboutData.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
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
