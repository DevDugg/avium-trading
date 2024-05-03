"use client";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import Testimonial from "./testimonial";

interface TestimonialColonProps {
  direction: "down" | "up";
}

const testimonials = [
  {
    name: "Jane Cooper",
    email: "sara.cruz@example.com",
    content: "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to comba",
    avatar: "/images/avatar-1.png",
  },
  {
    name: "Jane Cooper",
    email: "sara.cruz@example.com",
    content:
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to comba Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to comba. Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to comba",
    avatar: "/images/avatar-2.png",
  },
  {
    name: "Jane Cooper",
    email: "sara.cruz@example.com",
    content: "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to comba",
    avatar: "/images/avatar-3.png",
  },
  {
    name: "Jane Cooper",
    email: "sara.cruz@example.com",
    content:
      "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to comba Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to comba. Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to comba",
    avatar: "/images/avatar-4.png",
  },
  {
    name: "Jane Cooper",
    email: "sara.cruz@example.com",
    content: "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to comba",
    avatar: "/images/avatar-5.png",
  },
];

const TestimonialColon = ({ direction }: TestimonialColonProps) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={32}
      autoplay={{ delay: 1, disableOnInteraction: false, reverseDirection: direction === "down" }}
      loop
      slidesPerView={1}
      allowTouchMove={false}
      speed={40000}
      direction="vertical"
      height={1413}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <SwiperSlide key={index}>
          {testimonials.map((testimonial, index) => (
            <div className="mb-4" key={index}>
              <Testimonial {...testimonial} />
            </div>
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default TestimonialColon;
