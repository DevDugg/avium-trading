"use client";

import { ZodType, z } from "zod";
import { useRouter } from 'next/router'; // Import useRouter
import AnimateInView from "../animate-in-view";
import FormDropdown from "./form-dropdown";
import FormField from "./form-field";
import FormSubmit from "./form-submit";
import colors from "@/colors";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export interface FormData {
  email_or_discord: string;
  experience: string;
  risk_capital: string;
}

export type ValidFieldNames = "email_or_discord" | "experience" | "risk_capital";

const ContactForm = () => {
  const [capital, setCapital] = useState<string>("$5,000-$9,999");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter(); // Initialize router

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

  const onSubmit = async (data: FormData) => {
    if (isLoading) return;
    setIsLoading(true);
    const response = await fetch("/api/save-form", {
      method: "POST",
      body: JSON.stringify({ ...data, risk_capital: capital }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response === undefined || response.status !== 200 || !response.ok) {
      setIsLoading(false);
      return toast("Failed to submit the form", {
        progressStyle: { background: colors.RED },
      });
    }

    setIsLoading(false);
    toast("Form submitted successfully!", {
      progressStyle: { background: colors.ACCENT },
    });

    // Redirect to the desired page
    router.push('https://www.google.com/'); // Replace with your target URL
  };

  return (
    <form
      className="contact-form flex flex-col items-center overflow-visible"
      name="lead-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="max-w-[800px] w-full flex flex-col gap-4 overflow-visible h-fit relative">
        <motion.div
          className="bg-WHITE absolute left-0 top-0 size-full z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0.4 : 0 }}
          style={{ pointerEvents: isLoading ? "all" : "none" }}
        ></motion.div>
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
            data={{ dataState: capital, setDataState: setCapital }}
            type="text"
            placeholder="Select your risk capital"
            error={errors.risk_capital}
            register={register}
            name="risk_capital"
            items={["$5,000-$9,999", "$10,000-$29,999", "$30,000-$99,999", "$100,000+"]}
          />
        </AnimateInView>
        <AnimateInView {...defaultScrollVariants}>
          <FormField
            required
            label="Your experience"
            type="text"
            placeholder="Please share your experience with the market. What's been your biggest struggle? How long have you been trying to learn? What is your goal?"
            error={errors.experience}
            register={register}
            name="experience"
            isTextarea
          />
        </AnimateInView>
        <AnimateInView {...defaultScrollVariants}>
          <div className="flex justify-center pt-6">
            <div className="w-[380px] max-lg:w-full">
              <FormSubmit title="Submit" width="100%" />
            </div>
          </div>
        </AnimateInView>
      </div>
    </form>
  );
};

export default ContactForm;
