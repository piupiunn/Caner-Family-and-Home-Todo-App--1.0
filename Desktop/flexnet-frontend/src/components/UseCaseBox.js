import React from "react";

export default function UseCaseBox({
  name,
  jobTitle,
  message,
  companyLogo,
  companyName,
}) {
  return (
    <div className="p-4 rounded-lg  text-center bg-white">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500">{jobTitle}</p>
      <p className="mt-4 text-gray-600 ">{message}</p>
      <div className="flex justify-center items-center mt-6">
        <div className="w-12 h-12">{companyLogo}</div>
        <p className="ml-2 text-lg font-semibold">{companyName}</p>
      </div>
    </div>
  );
}
