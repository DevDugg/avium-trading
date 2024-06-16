"use client";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial, { TestimonialProps } from "./testimonial";
import { useCallback, useEffect, useState } from "react";

import { Autoplay } from "swiper/modules";
import { testimonialsData } from "@/data/testimonials.data";

interface TestimonialColonProps {
  direction: "down" | "up";
  setModalIndex: (index: TestimonialProps | null) => void;
}

const TestimonialColon = ({ direction, setModalIndex }: TestimonialColonProps) => {
  const [testimonials, setTestimonials] = useState<TestimonialProps[]>([]);

  const shuffle = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const shuffled = shuffle([...testimonialsData.testimonials]);
    setTestimonials(shuffled);
  }, []);
  return testimonials.length > 0 ? (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 1, disableOnInteraction: false, reverseDirection: direction === "down" }}
      loop
      style={{ touchAction: "pan-y" }}
      spaceBetween={0}
      slidesPerView={"auto"}
      allowTouchMove={false}
      speed={50000}
      direction="vertical"
      height={1413}
      autoHeight
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <SwiperSlide key={index} className="h-fit max-w-[422px]">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} setModalIndex={setModalIndex} />
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  ) : null;
};
export default TestimonialColon;
