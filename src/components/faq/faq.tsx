import FAQList from "./faq-list";
import SectionContainer from "../structure/section-container";
import SectionTitle from "../structure/section-title";

const FAQ = () => {
  return (
    <section className="faq" id="faq">
      <SectionContainer>
        <SectionTitle>Have any question?</SectionTitle>
        <div className="flex justify-center">
          <FAQList />
        </div>
      </SectionContainer>
    </section>
  );
};
export default FAQ;
