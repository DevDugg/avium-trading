import Container from "../container";
import GuaranteeList from "./guarantee-list";

const Guarantees = () => {
  return (
    <section className="guarantees">
      <Container className="grid grid-cols-FOUR">
        <div className="px-6 py-8">
          <p className="text-H3 font-bold">
            In just 60 days, we`ll teach you everything you need to trade on your own.
          </p>
        </div>
        <GuaranteeList />
      </Container>
    </section>
  );
};
export default Guarantees;
