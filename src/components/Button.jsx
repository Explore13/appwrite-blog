import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-green-500",
  textColor = "text-black",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 hover:bg-green-800 hover:text-white rounded-lg ${className} ${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

