import { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return (
    <div className="max-w-[1364px] px-8 mx-auto w-full overflow-hidden transition-all max-lg:px-5 max-md:px-4">
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
};

export default Container;
