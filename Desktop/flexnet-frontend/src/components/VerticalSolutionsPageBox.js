import React, { useState } from "react";

export default function VerticalSolutionsPageBox({
  icon,
  title,
  description,
  bgColor,
  borderColor,
  details2,
  details,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

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

      {/* Accordion button */}
      <button
        onClick={toggleAccordion}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none"
      >
        {isOpen ? "Hide Details" : "Show Details"}
      </button>

      {/* Accordion content */}
      {isOpen && (
        <div className="mt-4 text-left bg-gray-100 p-4 rounded-lg text-sm text-gray-700">
          <p>{details}</p>
          <p className="mt-4 font-bold text-left-sm text-gray-700">
            {details2}
          </p>
        </div>
      )}
    </div>
  );
}
