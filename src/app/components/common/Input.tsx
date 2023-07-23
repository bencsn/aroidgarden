import React from "react";

export default function Input({
  label,
  placeholder,
  type = "text",
  id,
  className,
  hint,
}: {
  label: string;
  placeholder: string;
  type?: string;
  id: string;
  className?: string;
  hint?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-medium text-gray-700 dark:text-gray-400"
      >
        {label}
      </label>

      {hint && (
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{hint}</p>
      )}

      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className={
          `mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm dark:bg-gray-800 dark:border-gray-700${className ? " " + className : ""}`
        }
      />
    </div>
  );
}
