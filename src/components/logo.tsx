import Image from "next/image";

interface LogoProps {
  eager?: boolean;
  size?: number;
}

const Logo = ({ eager, size }: LogoProps) => {
  return (
    <div className="logo rounded-[10px] w-12 h-12 overflow-hidden" style={size ? { width: size, height: size } : {}}>
      <Image
        alt="Logo"
        loading={eager ? "eager" : "lazy"}
        src={"/images/logo.png"}
        width={size || 48}
        height={size || 48}
      />
    </div>
  );
};
export default Logo;
