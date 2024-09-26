import React from "react";
import { Link } from "react-router-dom";

export default function SolutionBox({
  icon,
  title,
  description,
  bgColor,
  borderColor,
}) {
  return (
    <div
      className={`border vertical-soli-box  ${borderColor} rounded-lg p-6 text-center`}
      style={{ borderWidth: "2px" }}
    >
      <div
        className={` vertical-soli-box-icon h-12 mx-auto rounded-full ${bgColor} flex items-center justify-center mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 vertical-box-p text-gray-600">{description}</p>
      <button
        className={`border vertical-box-button ${bgColor} rounded-lg  text-center`}
      >
        <Link to="/single-vertical">Details</Link>
      </button>
    </div>
  );
}
