import React from "react";

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  [key: string]: any;
}) {
  const primaryClassName =
    `inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500${className ? " " + className : ""}`;

  const secondaryClassName =
    `inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-blue-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500${className ? " " + className : ""}`;

  if (variant === "secondary") {
    return (
      <button {...props} className={secondaryClassName}>
        {children}
      </button>
    );
  }

  return (
    <button {...props} className={primaryClassName}>
      {children}
    </button>
  );
}
