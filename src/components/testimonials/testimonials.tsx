"use client";

import AnimateInView from "../animate-in-view";
import SectionContainer from "../structure/section-container";
import SectionTitle from "../structure/section-title";
import TestimonialColon from "./testimonial-colon";
import { TestimonialProps } from "./testimonial";
import TestimonialsModal from "./testimonials-modal";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";
import { testimonialsData } from "@/data/testimonials.data";
import { useState } from "react";

const Testimonials = () => {
  const [modalIndex, setModalIndex] = useState<TestimonialProps | null>(null);
  return (
    <section className="testimonials" id="testimonials">
      <TestimonialsModal modalIndex={modalIndex} setModalIndex={setModalIndex} />
      <SectionContainer>
        <AnimateInView {...defaultScrollVariants}>
          <SectionTitle>{testimonialsData.title}</SectionTitle>
        </AnimateInView>
        <AnimateInView {...defaultScrollVariants} threshold={0.2}>
          <div className="relative h-[1413px]">
            <div className="absolute top-0 left-0 w-full h-full bg-TESTIMONIALS pointer-events-none z-10"></div>
            <div className="flex gap-4">
              <TestimonialColon direction="up" setModalIndex={setModalIndex} />
              <div className="max-md:hidden">
                <TestimonialColon direction="down" setModalIndex={setModalIndex} />
              </div>
              <div className="max-lg:hidden">
                <TestimonialColon direction="up" setModalIndex={setModalIndex} />
              </div>
            </div>
          </div>
        </AnimateInView>
      </SectionContainer>
    </section>
  );
};
export default Testimonials;
