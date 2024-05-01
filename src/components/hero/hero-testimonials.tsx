import HeroTestimonial from "./hero-testimonial";

const testimonials = [
  {
    rating: 5,
    text: "Works perfect",
  },
  {
    rating: 5,
    text: "Works perfect",
  },
  {
    rating: 5,
    text: "Works perfect",
  },
];

const HeroTestimonials = () => {
  return (
    <div className="hero-testimonials flex gap-6 justify-between">
      {testimonials.map((testimonial, i) => (
        <HeroTestimonial key={i} rating={testimonial.rating} text={testimonial.text} />
      ))}
    </div>
  );
};
export default HeroTestimonials;
