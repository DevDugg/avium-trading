import Benefit from "./benefit";
import SectionContainer from "../structure/section-container";
import SectionTitle from "../structure/section-title";

const benefits = [
  {
    title: "Reach your Trading Potential",
    description: "We provide you with all the essential resources and support to help you excel in trading",
    img: "/images/benefit-1.svg",
  },
  {
    title: "Expert Guidance, Always",
    description:
      "Whether you're trying to understand the basics or exploring advanced strategies, our experts are always there to answer any question!",
    img: "/images/benefit-2.svg",
  },
  {
    title: "Thrive Together",
    description: "Learn alongside like-minded traders and work together towards trading success.",
    img: "/images/benefit-3.svg",
  },
];

const Benefits = () => {
  return (
    <section className="benefits" id="benefits">
      <SectionContainer>
        <SectionTitle>What you will get at Avium</SectionTitle>
        <div className="grid grid-cols-THREE gap-2">
          {benefits.map((benefit, i) => (
            <Benefit key={i} {...benefit} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};
export default Benefits;
