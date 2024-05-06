import Image from "next/image";

interface LogoProps {
  priority?: boolean;
  size?: number;
}

const Logo = ({ priority, size }: LogoProps) => {
  return (
    <div className="logo rounded-[10px] w-12 h-12 overflow-hidden" style={size ? { width: size, height: size } : {}}>
      <Image alt="Logo" priority={priority} src={"/images/logo.png"} width={size || 48} height={size || 48} />
    </div>
  );
};
export default Logo;
