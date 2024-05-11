import AnimateInView from "../animate-in-view";
import Benefit from "./benefit";
import SectionContainer from "../structure/section-container";
import SectionTitle from "../structure/section-title";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";

const benefits = [
  {
    title: "Reach your Trading Potential",
    description: "We provide you with all the essential resources and support to help you excel in trading",
    img: "/images/benefit-1.svg",
  },
  {
    title: "Expert Guidance, Always",
    description:
      "Whether you're trying to understand the basics or exploring advanced strategies, our experts are always there to answer any question!",
    img: "/images/benefit-2.svg",
  },
  {
    title: "Thrive Together",
    description: "Learn alongside like-minded traders and work together towards trading success.",
    img: "/images/benefit-3.svg",
  },
];

const Benefits = () => {
  return (
    <section className="benefits" id="benefits">
      <SectionContainer>
        <AnimateInView {...defaultScrollVariants}>
          <SectionTitle>What you will get at Avium</SectionTitle>
        </AnimateInView>
        <div className="grid grid-cols-THREE gap-2 max-[870px]:flex max-[870px]:flex-col">
          {benefits.map((benefit, i) => (
            <AnimateInView key={i} {...defaultScrollVariants} transition={{ delay: 0.2 + 0.2 * i }} height="100%">
              <Benefit {...benefit} />
            </AnimateInView>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};
export default Benefits;
