import Image from "next/image";

interface BenefitProps {
  title: string;
  description: string;
  img: string;
}

const Benefit = ({ description, img, title }: BenefitProps) => {
  return (
    <div className="benefit py-10 px-6 flex flex-col gap-4 rounded-lg bg-LIGHTBLACK w-full h-full max-xl:px-4 max-xl:py-6">
      <Image src={img} alt="Benefit image" width={48} height={48} />
      <h3 className="text-H3 font-bold max-lg:text-lg">{title}</h3>
      <p className="text-lg text-GRAY max-lg:text-BASE">{description}</p>
    </div>
  );
};
export default Benefit;
