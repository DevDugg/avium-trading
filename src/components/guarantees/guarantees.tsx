import Container from "../container";

const Guarantees = () => {
  return (
    <section className="guarantees">
      <Container className="grid grid-cols-FOUR">
        <div className="px-6 py-8">
          <p className="text-H3 font-bold">
            In just 60 days, we`ll teach you everything you need to trade on your own.
          </p>
        </div>
        <div className="px-6 py-6 border-l border-WHITE">
          <div className="flex flex-col items-center gap-10 w-fit">
            <span className="text-[80px] w-fit">42+</span>
            <span className="text-lg w-fit">Micro lessons</span>
          </div>
        </div>
        <div className="px-6 py-6 border-r border-WHITE bg-GRADIENT">
          <div className="flex flex-col gap-10 text-center">
            <span className="text-[80px] w-fit">36+</span>
            <span className="text-lg w-fit">Workshops</span>
          </div>
        </div>
        <div className="px-6 py-6 border-r border-WHITE">
          <div className="flex flex-col gap-10 text-center">
            <span className="text-[80px] w-fit">12+</span>
            <span className="text-lg w-fit">Challenges</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Guarantees;
