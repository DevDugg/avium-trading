import AnimateInView from "../animate-in-view";
import Container from "../container";
import GuaranteeList from "./guarantee-list";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";

const Guarantees = () => {
  return (
    <section className="guarantees" id="guarantees">
      <Container className="flex flex-col gap-10">
        <AnimateInView {...defaultScrollVariants}>
          <div className="hidden items-center h-full max-md:flex max-md:items-center">
            <p className="text-H3 font-bold max-sm:text-lg">
              In just 60 days, we`ll teach you everything you need to trade on your own.
            </p>
          </div>
        </AnimateInView>
        <div className="grid grid-cols-FOUR max-md:grid-cols-THREE">
          <div className="max-md:hidden">
            <AnimateInView {...defaultScrollVariants}>
              <div className="p-6 flex items-center h-full max-lg:p-4">
                <p className="text-H3 font-bold max-lg:text-lg">
                  In just 60 days, we`ll teach you everything you need to trade on your own.
                </p>
              </div>
            </AnimateInView>
          </div>
          <GuaranteeList />
        </div>
      </Container>
    </section>
  );
};
export default Guarantees;
