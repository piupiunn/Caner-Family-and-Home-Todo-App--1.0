import React from "react";
import { Carousel } from "primereact/carousel";

import {
  FaMountain,
  FaBuilding,
  FaApple,
  FaExternalLinkAlt,
} from "react-icons/fa";
import UseCaseBox from "./UseCaseBox";
import { Link } from "react-router-dom";

export default function UseCases() {
  const testimonials = [
    {
      name: "XYZ Solution",
      jobTitle: "",
      message:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      companyLogo: <FaMountain size={48} className="text-gray-700" />,
      companyName: "",
    },
    {
      name: "XYZ Solution",
      jobTitle: "",
      message:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      companyLogo: <FaBuilding size={48} className="text-gray-700" />,
      companyName: "",
    },
    {
      name: "XYZ Solution",
      jobTitle: "",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      companyLogo: <FaApple size={48} className="text-gray-700" />,
      companyName: "",
    },
  ];

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "600px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const testimonialTemplate = (testimonial) => {
    return (
      <UseCaseBox
        name={testimonial.name}
        jobTitle={testimonial.jobTitle}
        message={testimonial.message}
        companyLogo={testimonial.companyLogo}
        companyName={testimonial.companyName}
      />
    );
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-semibold text-center mb-10">Use Cases</h2>
      <button className="use-case-button shadow-lg">
        <Link to="use-cases">View All Use Cases</Link>
        <FaExternalLinkAlt className="ml-2" />
      </button>
      <Carousel
        value={testimonials}
        itemTemplate={testimonialTemplate}
        numVisible={2}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        circular
        autoplayInterval={3000}
        className="testimonial-carousel use-case-slider"
      />
    </div>
  );
}
