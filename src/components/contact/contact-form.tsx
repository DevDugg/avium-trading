"use client";

import { ZodType, z } from "zod";

import AnimateInView from "../animate-in-view";
import CTALink from "../cta-link";
import FormDropdown from "./form-dropdown";
import FormField from "./form-field";
import FormSubmit from "./form-submit";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export interface FormData {
  email: string;
  discord: string;
  experience: string;
  risk_capital: string;
}

export type ValidFieldNames = "email" | "discord" | "experience" | "risk_capital";

const ContactForm = () => {
  const formSchema: ZodType<FormData> = z.object({
    email: z.string().email({ message: "Please enter a valid email" }).or(z.literal("")),
    discord: z
      .string()
      .min(2, { message: "Please enter a valid Discord username" })
      .max(32, { message: "Please enter a valid Discord username" }),
    experience: z.string().min(1, { message: "Experience is required" }),
    risk_capital: z.string().min(1, { message: "risk_capital is required" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = (data: FormData) => {};

  return (
    <form className="contact-form flex flex-col items-center overflow-visible" onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-[800px] w-full flex flex-col gap-4 overflow-visible h-fit">
        <AnimateInView {...defaultScrollVariants}>
          <FormField
            required
            label="Your discord"
            type="text"
            placeholder="johndoe3"
            error={errors.discord}
            register={register}
            name="discord"
          />
        </AnimateInView>
        <AnimateInView {...defaultScrollVariants}>
          <FormField
            label="Your email"
            type="email"
            placeholder="johndoe@gmail.com"
            error={errors.email}
            register={register}
            name="email"
          />
        </AnimateInView>
        <AnimateInView {...defaultScrollVariants}>
          <div className="flex gap-2 w-full">
            <FormDropdown
              required
              label="Your experience"
              type="text"
              placeholder="Select your experience"
              error={errors.experience}
              register={register}
              name="experience"
              items={["Beginner", "Intermediate", "Advanced"]}
            />
            <FormDropdown
              required
              label="Risk capital"
              note={{
                text: "Risk capital refers to funds used for speculation and investments. Risk capital is by definition money you can afford to lose, as such, any funds you might need to pay the bills do not count towards it and should not be used for investments.",
                title: "?",
              }}
              type="text"
              placeholder="Select your risk capital"
              error={errors.risk_capital}
              register={register}
              name="risk_capital"
              items={["$1000", "$5000", "$10000"]}
            />
          </div>
        </AnimateInView>
        <AnimateInView {...defaultScrollVariants}>
          <div className="flex justify-center pt-6">
            <FormSubmit title="Book a call" width="380px" />
          </div>
        </AnimateInView>
      </div>
    </form>
  );
};
export default ContactForm;
