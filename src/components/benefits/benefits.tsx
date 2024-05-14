import AnimateInView from "../animate-in-view";
import Benefit from "./benefit";
import SectionContainer from "../structure/section-container";
import SectionTitle from "../structure/section-title";
import { benefitsData } from "@/data/benefits.data";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";

const Benefits = () => {
  return (
    <section className="benefits" id="benefits">
      <SectionContainer>
        <AnimateInView {...defaultScrollVariants}>
          <SectionTitle>{benefitsData.title}</SectionTitle>
        </AnimateInView>
        <div className="grid grid-cols-THREE gap-2 max-[870px]:flex max-[870px]:flex-col">
          {benefitsData.benefits.map((benefit, i) => (
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
