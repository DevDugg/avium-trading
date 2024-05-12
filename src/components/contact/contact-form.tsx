"use client";

import { ZodType, z } from "zod";

import AnimateInView from "../animate-in-view";
import FormDropdown from "./form-dropdown";
import FormField from "./form-field";
import FormSubmit from "./form-submit";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export interface FormData {
  email_or_discord: string;
  experience: string;
  risk_capital: string;
}

export type ValidFieldNames = "email_or_discord" | "experience" | "risk_capital";

const ContactForm = () => {
  const formSchema: ZodType<FormData> = z.object({
    email_or_discord: z
      .string()
      .min(2, { message: "Please enter a valid Discord username or email" })
      .max(32, { message: "Please enter a valid Discord username or email" })
      .or(z.string().email({ message: "Please enter a valid Discord username or email" })),
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
            label="Your Discord username or Email"
            type="text"
            placeholder="johndoe#1234 / johndoe@gmail.com"
            error={errors.email_or_discord}
            register={register}
            name="email_or_discord"
          />
        </AnimateInView>
        <AnimateInView {...defaultScrollVariants}>
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
        </AnimateInView>
        <AnimateInView {...defaultScrollVariants}>
          <FormField
            required
            label="Your experience"
            type="text"
            placeholder="Please share your experience in the market and how Avium might help you"
            error={errors.experience}
            register={register}
            name="experience"
            isTextarea
          />
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
