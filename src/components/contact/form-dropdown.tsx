"use client";

import { useRef, useState } from "react";

import { FormFieldProps } from "./form-field";
import Image from "next/image";
import colors from "@/colors";
import { motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";

interface FormDropdownProps extends FormFieldProps {
  items: string[];
  data: {
    dataState: string;
    setDataState: (dataState: string) => void;
  };
}

const FormDropdown = ({
  note,
  error,
  items,
  name,
  placeholder,
  register,
  type,
  label,
  required,
  valueAsNumber,
  data,
}: FormDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setIsOpen(false));
  return (
    <div className="form-dropdown flex flex-col gap-2 w-full" onClick={() => setIsOpen(!isOpen)} ref={dropdownRef}>
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
      <div className="relative w-full">
        <motion.input
          type={type}
          id={name}
          placeholder={placeholder}
          readOnly
          value={data.dataState}
          {...register(name, { valueAsNumber })}
          className="rounded-lg px-[14px] w-full py-4 text-BASE bg-LIGHTBLACK border border-GRAY placeholder:text-GRAY outline-none cursor-pointer"
          animate={error ? { borderColor: colors.RED } : { borderColor: colors.GRAY }}
          whileFocus={{ borderColor: colors.ACCENT }}
        />
        <motion.ul
          className="absolute left-0 top-[120%] border border-GRAY h-fit rounded-lg overflow-auto w-full pointer-events-none cursor-pointer z-10"
          style={{ pointerEvents: isOpen ? "all" : "none" }}
          initial={{ opacity: 0 }}
          animate={isOpen ? { opacity: 1 } : {}}
        >
          {items.map((item) => (
            <motion.li
              key={item}
              className="dropdown-item px-[14px] py-4 text-BASE bg-LIGHTBLACK"
              onClick={() => {
                data.setDataState(item);
                setIsOpen(false);
              }}
              initial={{ background: colors.LIGHTBLACK }}
              animate={item === data.dataState ? { background: colors.LIGHTBLACK_HOVER } : {}}
              whileHover={{ background: colors.LIGHTBLACK_HOVER }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          className="absolute right-[14px] top-4 z-10 pointer-events-none"
          initial={{ rotate: "0deg" }}
          animate={{ rotate: isOpen ? "180deg" : "0deg" }}
        >
          <Image src="/images/dropdown-arrow.svg" width={24} height={24} alt="Arrow" />
        </motion.div>
      </div>
      {error && <span className="error-message text-RED text-BASE">{error.message}</span>}
    </div>
  );
};
export default FormDropdown;
