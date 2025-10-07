'use client';
// components/form/PasswordInput.tsx
import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { InputHTMLAttributes, ReactNode } from "react";

interface PasswordInputProps {
  id?: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
}

export const PasswordInput = ({
  id = "password",
  label = "Senha",
  value,
  onChange,
  error,
  placeholder = "********",
}: PasswordInputProps) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className="w-full flex flex-col mt-7">
      <div className="flex items-center justify-start relative">
        <label
          htmlFor={id}
          className="absolute left-2.5 -top-2 bg-background sm:bg-component px-1.5 text-sm"
        >
          {label}
        </label>
        <Lock className="absolute left-2 text-gray-500" />
        <input
          type={visible ? "text" : "password"}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`border-2 focus:border-primary rounded-md py-3 px-9 w-96 outline-none border-foreground/20 text-lg transition-all ${
            error ? "border-error/90" : ""
          }`}
        />
        <button
          type="button"
          className="absolute right-2 p-1 text-gray-600"
          onClick={toggleVisibility}
        >
          {visible ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      </div>
      {error && <span className="text-red-500 font-normal text-sm mt-1">{error}</span>}
    </div>
  );
};




interface LabeledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  icon?: ReactNode;
  error?: string;
  className?: string;
}

export const LabeledInput = ({
  id,
  label,
  icon,
  error,
  className = "",
  ...rest
}: LabeledInputProps) => {
  return (
    <div className="w-full flex flex-col mt-5">
      <div className="flex items-center justify-start relative">
        <label
          htmlFor={id}
          className="absolute left-2.5 -top-2 bg-component sm:bg-component px-1.5 text-sm"
        >
          {label}
        </label>
        {icon && <div className="absolute left-2">{icon}</div>}
        <input
          id={id}
          className={`border-2 rounded-md focus:border-primary py-3 px-4 w-96 text-lg border-foreground/20 outline-none ${
            error ? "border-error/90" : ""
          } ${className} ${icon ? 'ps-9' : 'ps-4'}`}
          {...rest}
        />
      </div>
      {error && <span className="text-red-500 font-normal text-sm mt-1">{error}</span>}
    </div>
  );
};
