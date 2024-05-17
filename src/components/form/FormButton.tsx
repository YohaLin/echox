import clsx from "clsx";
import React from "react";

interface FormButtonProps {
  type: "button" | "reset" | "submit";
  text: string;
}

const FormButton: React.FC<FormButtonProps> = ({ type, text }) => {
  return (
    <button
      className={clsx("w-full h-[51px] rounded-[4px] text-[1.125rem] lg:w-40", {
        "bg-green-500 text-black": type === "submit",
        "border border-gray-700 text-gray-700": type === "reset",
      })}
      type={type}
    >
      {text}
    </button>
  );
};

export default FormButton;
