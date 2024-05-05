import SectionContainer from "../structure/section-container";
import SectionTitle from "../structure/section-title";
import TestimonialColon from "./testimonial-colon";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <SectionContainer>
        <SectionTitle>What others say about us</SectionTitle>
        <div className="relative max-h-[1413px] h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-TESTIMONIALS pointer-events-none z-10"></div>
          <div className="flex gap-4">
            <TestimonialColon direction="up" />
            <TestimonialColon direction="down" />
            <TestimonialColon direction="up" />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
export default Testimonials;
