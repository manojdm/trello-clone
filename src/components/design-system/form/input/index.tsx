import React from "react";

interface InputFieldProps {
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  value?: string;
  onChange?: any;
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  required = false,
  placeholder = "",
  className = "",
  disabled = false,
  value = "",
  onChange,
}) => {
  return (
    <input
      type={type}
      required={required}
      value={value}
      placeholder={placeholder}
      className={`input-field border border-2 px-2 py-1 w-full  ${className}`}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    />
  );
};

export default InputField;
