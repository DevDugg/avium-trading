import Container from "../container";
import Guarantee from "./guarantee";

const guarantees = [
  {
    number: "42+",
    name: "Micro lessons",
  },
  {
    number: "36+",
    name: "Workshops",
  },
  {
    number: "12+",
    name: "Challenges",
  },
];

const Guarantees = () => {
  return (
    <section className="guarantees">
      <Container className="grid grid-cols-FOUR">
        <div className="px-6 py-8 border-r border-WHITE">
          <p className="text-H3 font-bold">
            In just 60 days, we`ll teach you everything you need to trade on your own.
          </p>
        </div>
        {guarantees.map((guarantee, index) => (
          <Guarantee key={index} {...guarantee} />
        ))}
      </Container>
    </section>
  );
};
export default Guarantees;
