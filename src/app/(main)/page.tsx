import About from "@/components/about/about";
import Benefits from "@/components/benefits/benefits";
import Guarantees from "@/components/guarantees/guarantees";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main className="main pt-10 pb-[150px] flex flex-col gap-[150px]">
      <Hero />
      <Guarantees />
      <Benefits />
      <About />
    </main>
  );
}
