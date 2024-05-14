import HeroTestimonial from "./hero-testimonial";
import { heroData } from "@/data/hero.data";

const HeroTestimonials = () => {
  return (
    <div className="max-lg:flex max-lg:justify-center">
      <div className="hero-testimonials flex gap-6 justify-between max-lg:gap-[10vw] max-md:gap-6 max-sm:grid max-sm:grid-cols-THREE max-sm:gap-4">
        {heroData.socialProof.map((testimonial, i) => (
          <HeroTestimonial key={i} rating={testimonial.rating} text={testimonial.text} />
        ))}
      </div>
    </div>
  );
};
export default HeroTestimonials;
