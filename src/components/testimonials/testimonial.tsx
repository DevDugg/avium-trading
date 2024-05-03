import Image from "next/image";

interface TestimonialProps {
  name: string;
  email: string;
  content: string;
  avatar: string;
}

const Testimonial = ({ avatar, content, email, name }: TestimonialProps) => {
  return (
    <div className="testimonial rounded-2xl bg-LIGHTBLACK p-6 flex flex-col gap-6 ">
      <div className="flex items-center gap-6">
        <Image src={avatar} alt="Profile picture" width={40} height={40} className="rounded-full" />
        <div className="flex flex-col gap-1 text-lg">
          <span>{name}</span>
          <span className="text-GRAY">{email}</span>
        </div>
      </div>
      <p className="text-GRAY text-lg">{content}</p>
    </div>
  );
};
export default Testimonial;
