"use client";
import { motion } from "framer-motion";

import { FieldError, UseFormRegister } from "react-hook-form";

import { ValidFieldNames } from "./contact-form";
import { type FormData } from "./contact-form";
import colors from "@/colors";

export interface FormFieldProps {
  required?: boolean;
  label?: string;
  note?: {
    text: string;
    title: string;
  };
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  isTextarea?: boolean;
}

const FormField = ({
  required,
  label,
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  note,
  isTextarea,
}: FormFieldProps) => {
  return (
    <div className="form-field flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-lg">
          {label} {required ? <span className="text-RED">*</span> : ""}{" "}
          {note ? (
            <span className="text-ACCENT" title={note.text}>
              ({note.title})
            </span>
          ) : (
            ""
          )}
        </label>
      )}
      {isTextarea ? (
        <motion.textarea
          id={name}
          rows={5}
          placeholder={placeholder}
          {...register(name, { valueAsNumber })}
          className="rounded-lg px-[14px] py-4 text-BASE bg-LIGHTBLACK border border-GRAY placeholder:text-GRAY outline-none resize-none w-full"
          animate={error ? { borderColor: colors.RED } : { borderColor: colors.GRAY }}
          whileFocus={{ borderColor: colors.ACCENT }}
        />
      ) : (
        <motion.input
          type={type}
          id={name}
          placeholder={placeholder}
          {...register(name, { valueAsNumber })}
          className="rounded-lg px-[14px] py-4 text-BASE bg-LIGHTBLACK border border-GRAY placeholder:text-GRAY outline-none"
          animate={error ? { borderColor: colors.RED } : { borderColor: colors.GRAY }}
          whileFocus={{ borderColor: colors.ACCENT }}
        />
      )}
      {error && <span className="error-message text-RED text-BASE">{error.message}</span>}
    </div>
  );
};
export default FormField;
