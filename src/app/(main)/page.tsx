import About from "@/components/about/about";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main className="main py-10 flex flex-col gap-[150px]">
      <Hero />
      <About />
    </main>
  );
}
