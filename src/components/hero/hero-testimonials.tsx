import HeroTestimonial from "./hero-testimonial";

const testimonials = [
  {
    rating: 5,
    text: "Best trading mentorship",
  },
  {
    rating: 5,
    text: "Transformed my trading",
  },
  {
    rating: 5,
    text: "Results-driven strategies",
  },
];

const HeroTestimonials = () => {
  return (
    <div className="max-lg:flex max-lg:justify-center">
      <div className="hero-testimonials flex gap-6 justify-between max-lg:gap-[10vw] max-md:gap-6 max-sm:grid max-sm:grid-cols-THREE max-sm:gap-4">
        {testimonials.map((testimonial, i) => (
          <HeroTestimonial key={i} rating={testimonial.rating} text={testimonial.text} />
        ))}
      </div>
    </div>
  );
};
export default HeroTestimonials;
