import Container from "../container";
import { PropsWithChildren } from "react";

const SectionContainer = ({ children }: PropsWithChildren) => {
  return <Container className="flex flex-col gap-12 max-lg:gap-10">{children}</Container>;
};
export default SectionContainer;
