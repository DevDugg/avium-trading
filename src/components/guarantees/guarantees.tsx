import AnimateInView from "../animate-in-view";
import Container from "../container";
import GuaranteeList from "./guarantee-list";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";
import { guaranteesData } from "@/data/guarantees.data";

const Guarantees = () => {
  return (
    <section className="guarantees" id="guarantees">
      <Container className="flex flex-col gap-10 max-sm:gap-8">
        <AnimateInView {...defaultScrollVariants}>
          <div className="hidden items-center h-full max-md:flex max-md:items-center">
            <p className="text-H3 font-bold max-sm:text-xl">{guaranteesData.description}</p>
          </div>
        </AnimateInView>
        <div className="grid grid-cols-FOUR max-md:grid-cols-THREE max-[420px]:flex max-[420px]:flex-col">
          <div className="max-md:hidden">
            <AnimateInView {...defaultScrollVariants}>
              <div className="p-6 flex items-center h-full max-lg:p-4">
                <p className="text-H3 font-bold max-lg:text-lg">{guaranteesData.description}</p>
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
