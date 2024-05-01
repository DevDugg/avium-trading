import Container from "../container";
import FAQList from "./faq-list";

const FAQ = () => {
  return (
    <section className="faq" id="faq">
      <Container className="flex flex-col items-center gap-12">
        <h3 className="text-H3 text-center font-bold">Have any question?</h3>
        <FAQList />
      </Container>
    </section>
  );
};
export default FAQ;
