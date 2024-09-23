import React from "react";

export default function SolutionBox({
  icon,
  title,
  description,
  bgColor,
  borderColor,
}) {
  return (
    <div
      className={`border ${borderColor} rounded-lg p-6 text-center`}
      style={{ borderWidth: "2px" }}
    >
      <div
        className={`w-12 h-12 mx-auto rounded-full ${bgColor} flex items-center justify-center mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
