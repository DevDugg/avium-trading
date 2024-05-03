import Container from "../container";
import TestimonialColon from "./testimonial-colon";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <Container className="flex flex-col gap-12">
        <h2 className="text-H2 font-bold text-center">What others say about us</h2>
        <div className="relative max-h-[1413px] h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-TESTIMONIALS pointer-events-none z-10"></div>
          <div className="flex gap-4">
            <TestimonialColon direction="up" />
            <TestimonialColon direction="down" />
            <TestimonialColon direction="up" />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Testimonials;
