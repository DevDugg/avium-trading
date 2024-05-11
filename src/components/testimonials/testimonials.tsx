import AnimateInView from "../animate-in-view";
import SectionContainer from "../structure/section-container";
import SectionTitle from "../structure/section-title";
import TestimonialColon from "./testimonial-colon";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <SectionContainer>
        <AnimateInView {...defaultScrollVariants}>
          <SectionTitle>What others say about us</SectionTitle>
        </AnimateInView>
        <AnimateInView {...defaultScrollVariants} threshold={0.2}>
          <div className="relative max-h-[1413px] h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-TESTIMONIALS pointer-events-none z-10"></div>
            <div className="flex gap-4">
              <TestimonialColon direction="up" />
              <div className="max-md:hidden">
                <TestimonialColon direction="down" />
              </div>
              <div className="max-lg:hidden">
                <TestimonialColon direction="up" />
              </div>
            </div>
          </div>
        </AnimateInView>
      </SectionContainer>
    </section>
  );
};
export default Testimonials;
