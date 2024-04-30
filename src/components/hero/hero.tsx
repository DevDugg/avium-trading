import Container from "../container";
import Header from "../header/header";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <Container className="flex gap-20">
        <div className="flex flex-col gap-[124px] w-full">
          <Header />
          <div className="flex flex-col gap-6">
            <h1 className="text-WHITE text-H1 leading-H1 font-medium">Learn to Trade Like a Pro</h1>
            <p className="text-GRAY text-lg">
              Unlock your Trading Potential with Personalized Mentorship and High-Quality Resources
            </p>
          </div>
        </div>
        <Image src={"/images/hero.png"} alt="Hero" priority width={624} height={700} className="rounded-3xl" />
      </Container>
    </section>
  );
};
export default Hero;
