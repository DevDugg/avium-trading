import Image from "next/image";

interface HeroTestimonialProps {
  rating: number;
  text: string;
}

const HeroTestimonial = ({ rating, text }: HeroTestimonialProps) => {
  return (
    <div className="hero-testimonial flex flex-col items-center gap-2">
      <div className="stars flex items-center">
        {[...Array(rating)].map((_, i) => (
          <Image
            key={i}
            src="/images/rating-star.svg"
            style={{ opacity: rating < i ? 0.3 : 1 }}
            alt="Star"
            width={16}
            height={16}
          />
        ))}
      </div>
      <p className="text-lg text-GRAY">{text}</p>
    </div>
  );
};
export default HeroTestimonial;
