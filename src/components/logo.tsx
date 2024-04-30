import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo rounded-[10px] w-12 h-12 overflow-hidden">
      <Image alt="Logo" src={"/images/logo.png"} width={48} height={48} />
    </div>
  );
};
export default Logo;
