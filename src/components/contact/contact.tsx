import ContactForm from "./contact-form";
import SectionContainer from "../structure/section-container";
import SectionTitle from "../structure/section-title";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <SectionContainer>
        <SectionTitle>Contact us</SectionTitle>
        <ContactForm />
      </SectionContainer>
    </section>
  );
};
export default Contact;
