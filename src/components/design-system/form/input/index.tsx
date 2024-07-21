import React from "react";

interface InputFieldProps {
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  value?: string;
  onChange?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  required = false,
  placeholder = "",
  className = "",
  disabled = false,
  value = "",
}) => {
  return (
    <input
      type={type}
      required={required}
      value={value}
      placeholder={placeholder}
      className={`input-field border border-2 px-2 py-1 w-full  ${className}`} // Add a default className and allow additional classes
      disabled={disabled}
    />
  );
};

export default InputField;
