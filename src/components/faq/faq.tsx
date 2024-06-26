import AnimateInView from "../animate-in-view";
import FAQList from "./faq-list";
import SectionContainer from "../structure/section-container";
import SectionTitle from "../structure/section-title";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";
import { faqData } from "@/data/faq.data";

const FAQ = () => {
  return (
    <section className="faq" id="faq">
      <SectionContainer>
        <AnimateInView {...defaultScrollVariants}>
          <SectionTitle>{faqData.title}</SectionTitle>
        </AnimateInView>
        <AnimateInView {...defaultScrollVariants}>
          <div className="flex justify-center">
            <FAQList />
          </div>
        </AnimateInView>
      </SectionContainer>
    </section>
  );
};
export default FAQ;
