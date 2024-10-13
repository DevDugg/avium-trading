// /app/components/contact-form/ContactForm.tsx

"use client";

import { ZodType, z } from "zod";
import AnimateInView from "../animate-in-view/AnimateInView";
import FormDropdown from "./FormDropdown";
import FormField from "./FormField";
import FormSubmit from "./FormSubmit";
import colors from "@/colors";
import { defaultScrollVariants } from "@/variants/default-scroll.variants";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for react-toastify
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

  const formSchema: ZodType<FormData> = z.object({
    email_or_discord: z
      .string()
      .min(2, { message: "Please enter a valid Discord username or email" })
      .max(32, { message: "Please enter a valid Discord username or email" })
      .or(
        z.string().email({
          message: "Please enter a valid Discord username or email",
        })
      ),
    experience: z.string().min(1, { message: "Experience is required" }),
    risk_capital: z.string().min(1, { message: "Risk capital is required" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: FormData) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/save-form", {
        method: "POST",
        body: JSON.stringify({ ...data, risk_capital: capital }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      toast.success("Form submitted successfully! Redirecting...", {
        progressStyle: { background: colors.ACCENT },
      });

      // Redirect to Google after a short delay to allow the toast to display
      setTimeout(() => {
        window.location.href = "https://google.com";
      }, 2000); // 2 seconds delay
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit the form", {
        progressStyle: { background: colors.RED },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer /> {/* Toast container to display notifications */}
      <form
        className="contact-form flex flex-col items-center overflow-visible"
        name="lead-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="max-w-[800px] w-full flex flex-col gap-4 overflow-visible h-fit relative">
          {/* Loading Overlay */}
          {isLoading && (
            <motion.div
              className="bg-white absolute left-0 top-0 w-full h-full z-50 opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.3 }}
              style={{ pointerEvents: "all" }}
            ></motion.div>
          )}

          {/* Form Fields */}
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
              label="Risk Capital"
              note={{
                text: "Risk capital refers to funds used for speculation and investments. It is money you can afford to lose without affecting your financial stability.",
                title: "?",
              }}
              data={{ dataState: capital, setDataState: setCapital }}
              type="text"
              placeholder="Select your risk capital"
              error={errors.risk_capital}
              register={register}
              name="risk_capital"
              items={[
                "$5,000-$9,999",
                "$10,000-$29,999",
                "$30,000-$99,999",
                "$100,000+",
              ]}
            />
          </AnimateInView>

          <AnimateInView {...defaultScrollVariants}>
            <FormField
              required
              label="Your Experience"
              type="text"
              placeholder="Share your experience with the market. What's been your biggest struggle? How long have you been trying to learn? What is your goal?"
              error={errors.experience}
              register={register}
              name="experience"
              isTextarea
            />
          </AnimateInView>

          <AnimateInView {...defaultScrollVariants}>
            <div className="flex justify-center pt-6">
              <div className="w-[380px] max-lg:w-full">
                <FormSubmit
                  title="Submit"
                  width="100%"
                  disabled={isLoading}
                />
              </div>
            </div>
          </AnimateInView>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
