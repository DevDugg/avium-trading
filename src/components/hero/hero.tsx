import CTALink from "../cta-link";
import Container from "../container";
import Header from "../header/header";
import HeroTestimonials from "./hero-testimonials";
import Image from "next/image";
import { heroData } from "@/data/hero.data";

const Hero = () => {
  const { title, subtitle, cta } = heroData;
  return (
    <section className="hero" id="hero">
      <Container className="flex gap-20 max-lg:flex-col max-lg:items-center max-lg:gap-16 max-md:gap-12">
        <div className="flex flex-col gap-[124px] w-full">
          <div className="max-[1260px]:hidden">
            <Header />
          </div>
          <div className="flex flex-col gap-12 justify-between h-full">
            <div className="flex flex-col gap-6 max-lg:items-center max-lg:gap-4">
              <h1 className="text-H1 leading-H1 font-medium max-lg:text-center max-lg:text-[64px] max-md:text-[48px]">
                {title}
              </h1>
              <p className="text-GRAY text-lg max-lg:text-center max-lg:max-w-[70%] max-md:text-base max-md:max-w-[80%] max-sm:max-w-none">
                {subtitle}
              </p>
              <div className="pt-6 max-lg:flex max-lg:justify-center max-lg:pt-2">
                <CTALink title={cta.text} href={cta.link} />
              </div>
            </div>
            <HeroTestimonials />
          </div>
        </div>
        <Image
          src={"/images/hero.png"}
          alt="Hero"
          priority
          width={624}
          height={700}
          className="rounded-3xl max-w-[624px] object-cover w-full max-lg:hidden"
        />
        <Image
          src={"/images/hero-mobile.png"}
          alt="Hero"
          priority
          width={992}
          height={480}
          className="rounded-3xl hidden max-lg:block"
        />
      </Container>
    </section>
  );
};
export default Hero;
