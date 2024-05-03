import About from "@/components/about/about";
import Benefits from "@/components/benefits/benefits";
import Contact from "@/components/contact/contact";
import FAQ from "@/components/faq/faq";
import Guarantees from "@/components/guarantees/guarantees";
import Hero from "@/components/hero/hero";
import Pricing from "@/components/pricing/pricing";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <main className="main pt-10 pb-[150px] flex flex-col gap-[150px]">
      <Hero />
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
