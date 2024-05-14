"use client";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import Testimonial from "./testimonial";
import { testimonialsData } from "@/data/testimonials.data";

interface TestimonialColonProps {
  direction: "down" | "up";
}

const TestimonialColon = ({ direction }: TestimonialColonProps) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 1, disableOnInteraction: false, reverseDirection: direction === "down" }}
      loop
      spaceBetween={0}
      slidesPerView={"auto"}
      allowTouchMove={false}
      speed={20000}
      direction="vertical"
      height={1413}
      autoHeight
      className="pointer-events-none"
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <SwiperSlide key={index} className="h-fit">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default TestimonialColon;
