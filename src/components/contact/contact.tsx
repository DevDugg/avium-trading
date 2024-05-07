import AnimateInView from "../animate-in-view";
import ContactForm from "./contact-form";
import SectionContainer from "../structure/section-container";
import SectionTitle from "../structure/section-title";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <SectionContainer>
        <AnimateInView {...defaultScrollVariants}>
          <SectionTitle>Contact us</SectionTitle>
        </AnimateInView>
        <ContactForm />
      </SectionContainer>
    </section>
  );
};
export default Contact;
