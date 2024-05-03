interface FormSubmitProps {
  title: string;
  width?: string;
}

const FormSubmit = ({ title, width }: FormSubmitProps) => {
  return (
    <div
      className="flex items-center justify-center w-fit p-[1px] bg-STROKE_GRADIENT rounded-[100px]"
      style={{ width }}
    >
      <button
        type="submit"
        className="cta-btn rounded-[100px] px-10 py-[10px] bg-GRADIENT flex items-center justify-center w-full"
      >
        <span className="font-medium text-lg w-fit h-fit">{title}</span>
      </button>
    </div>
  );
};
export default FormSubmit;
