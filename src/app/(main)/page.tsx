import About from "@/components/about/about";
import Benefits from "@/components/benefits/benefits";
import Contact from "@/components/contact/contact";
import Container from "@/components/container";
import FAQ from "@/components/faq/faq";
import Guarantees from "@/components/guarantees/guarantees";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Pricing from "@/components/pricing/pricing";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <main className="main pt-10 pb-[150px] flex flex-col gap-[150px] max-lg:gap-[100px] max-lg:pb-[100px]">
      <div className="flex flex-col gap-[100px] max-md:gap-[59px]">
        <div className="hidden max-[1260px]:block">
          <Container>
            <Header />
          </Container>
        </div>
        <Hero />
      </div>
      <Guarantees />
      <Benefits />
      <About />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
