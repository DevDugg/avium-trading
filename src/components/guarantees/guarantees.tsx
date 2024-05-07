import AnimateInView from "../animate-in-view";
import Container from "../container";
import GuaranteeList from "./guarantee-list";

const Guarantees = () => {
  return (
    <section className="guarantees" id="guarantees">
      <Container className="grid grid-cols-FOUR">
        <AnimateInView
          initialVariant={{ y: "10%", opacity: 0 }}
          inViewVariant={{ y: "0%", opacity: 1 }}
          threshold={0.4}
        >
          <div className="px-6 py-8">
            <p className="text-H3 font-bold">
              In just 60 days, we`ll teach you everything you need to trade on your own.
            </p>
          </div>
        </AnimateInView>
        <GuaranteeList />
      </Container>
    </section>
  );
};
export default Guarantees;
