import React from "react";
import SolutionBox from "./SolutionBox";
import {
  FaMoon,
  FaCheckCircle,
  FaFileAlt,
  FaMobileAlt,
  FaMagic,
  FaShoppingCart,
  FaCode,
  FaEye,
} from "react-icons/fa";

export default function VerticalSolutions() {
  const features = [
    {
      icon: <FaCheckCircle size={24} className="text-yellow-500" />,
      title: "Easy to Use",
      description: "Posuere morbi leo urna molestie.",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-200",
    },
    {
      icon: <FaMagic size={24} className="text-teal-500" />,
      title: "Fresh Design",
      description: "Semper risus in hendrerit.",
      bgColor: "bg-teal-100",
      borderColor: "border-teal-200",
    },
    {
      icon: <FaFileAlt size={24} className="text-purple-500" />,
      title: "Well Documented",
      description: "Non arcu risus quis varius quam quisque.",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
    },
    {
      icon: <FaMobileAlt size={24} className="text-gray-500" />,
      title: "Responsive Layout",
      description: "Nulla malesuada pellentesque elit.",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-200",
    },
    {
      icon: <FaCode size={24} className="text-yellow-500" />,
      title: "Clean Code",
      description: "Condimentum lacinia quis vel eros.",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-200",
    },
    {
      icon: <FaMoon size={24} className="text-pink-500" />,
      title: "Dark Mode",
      description: "Convallis tellus id interdum velit laoreet.",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-200",
    },
    {
      icon: <FaShoppingCart size={24} className="text-green-500" />,
      title: "Ready to Use",
      description: "Mauris sit amet massa vitae.",
      bgColor: "bg-green-100",
      borderColor: "border-green-200",
    },
    {
      icon: <FaEye size={24} className="text-purple-500" />,
      title: "Privacy",
      description: "Neque egestas congue quisque.",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
    },
    {
      icon: <FaCode size={24} className="text-blue-500" />,
      title: "Modern Practices",
      description: "Elementum nibh tellus molestie nunc non.",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <SolutionBox
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            bgColor={feature.bgColor}
            borderColor={feature.borderColor}
          />
        ))}
      </div>
    </div>
  );
}
