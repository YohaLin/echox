import clsx from "clsx";
import React, { forwardRef } from "react";
import { formButtonStyle } from "../../constants/buttonStyle";

interface TextInputProps {
  label: string;
  disabled: boolean;
  placeholder: string;
  required: boolean;
  error: boolean
  value?: string
  onChange: () => void
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, disabled, placeholder, required, error, value, onChange }, ref) => {
    return (
      <div className="flex flex-col gap-[10px]">
        <label className="h-6">
          欄位：{label}
          {required && <span className="text-red-500">*</span>}
          {error? <span className="text-red-500 text-sm"> 必填欄位！</span>: ""}
        </label>
        <input
          type="text"
          ref={ref}
          disabled={disabled}
          className={clsx(formButtonStyle, {
            "ring-red-500": error
          })}
          placeholder={disabled ? "不可修改的欄位資料" : placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
);

export default TextInput;
