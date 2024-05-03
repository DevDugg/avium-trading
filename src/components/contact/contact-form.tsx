"use client";

import { ZodType, z } from "zod";

import CTALink from "../cta-link";
import FormDropdown from "./form-dropdown";
import FormField from "./form-field";
import FormSubmit from "./form-submit";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export interface FormData {
  email: string;
  discord: string;
  experience: string;
  budget: string;
}

export type ValidFieldNames = "email" | "discord" | "experience" | "budget";

const ContactForm = () => {
  const formSchema: ZodType<FormData> = z.object({
    email: z.string().email({ message: "Please enter a valid email" }),
    discord: z
      .string()
      .min(2, { message: "Please enter a valid Discord username" })
      .max(32, { message: "Please enter a valid Discord username" }),
    experience: z.string().min(1, { message: "Experience is required" }),
    budget: z.string().min(1, { message: "Budget is required" }),
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
        <FormField
          required
          label="Your discord"
          type="text"
          placeholder="johndoe3"
          error={errors.discord}
          register={register}
          name="discord"
        />
        <FormField
          required
          label="Your email"
          type="email"
          placeholder="johndoe@gmail.com"
          error={errors.email}
          register={register}
          name="email"
        />
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
            label="Your budget"
            type="text"
            placeholder="Select your budget"
            error={errors.budget}
            register={register}
            name="budget"
            items={["$1000", "$5000", "$10000"]}
          />
        </div>
        <div className="flex justify-center pt-6">
          <FormSubmit title="Book a call" width="380px" />
        </div>
      </div>
    </form>
  );
};
export default ContactForm;
