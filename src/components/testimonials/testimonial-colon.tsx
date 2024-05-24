"use client";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial, { TestimonialProps } from "./testimonial";

import { Autoplay } from "swiper/modules";
import { testimonialsData } from "@/data/testimonials.data";

interface TestimonialColonProps {
  direction: "down" | "up";
  setModalIndex: (index: TestimonialProps | null) => void;
}

const TestimonialColon = ({ direction, setModalIndex }: TestimonialColonProps) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 1, disableOnInteraction: false, reverseDirection: direction === "down" }}
      loop
      style={{ touchAction: "pan-y" }}
      spaceBetween={0}
      slidesPerView={"auto"}
      allowTouchMove={false}
      speed={30000}
      direction="vertical"
      height={1413}
      autoHeight
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <SwiperSlide key={index} className="h-fit">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} setModalIndex={setModalIndex} />
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default TestimonialColon;
