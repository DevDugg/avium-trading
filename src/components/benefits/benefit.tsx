import Image from "next/image";

interface BenefitProps {
  title: string;
  description: string;
  img: string;
}

const Benefit = ({ description, img, title }: BenefitProps) => {
  return (
    <div className="benefit py-10 px-6 flex flex-col gap-4 rounded-lg bg-LIGHTBLACK w-full">
      <Image src={img} alt="Benefit image" width={48} height={48} />
      <h3 className="text-H3 font-bold">{title}</h3>
      <p className="text-lg text-GRAY">{description}</p>
    </div>
  );
};
export default Benefit;
