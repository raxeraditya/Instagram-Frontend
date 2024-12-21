import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

export default function InputField({
  label,
  icon,
  id,
  ...props
}: InputFieldProps) {
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        className="peer w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-transparent 
          focus:outline-none focus:border-indigo-500 transition-colors text-black"
        placeholder={label}
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-black transition-all
          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5
          peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-indigo-600"
      >
        {label}
      </label>
      {icon && <div className="absolute right-3 top-3.5">{icon}</div>}
    </div>
  );
}
