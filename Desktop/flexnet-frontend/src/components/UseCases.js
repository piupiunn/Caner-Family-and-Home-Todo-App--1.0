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
      name: "Mobility",
      jobTitle: "Samlessly Moving People & Things",
      message:
        "Reliable coverage & seamless handover enabling maximum mobility of workers, AVGs and drones regardless of the zone",
      companyLogo: <FaMountain size={48} className="text-gray-700" />,
      companyName: "",
    },
    {
      name: "Computer Vision",
      jobTitle: "Looking via Camera Seeing via AI",
      message:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      companyLogo: <FaBuilding size={48} className="text-gray-700" />,
      companyName: "",
    },
    {
      name: "Real-time Data",
      jobTitle: "Sensors opening a new dimension",
      message:
        "Data and AI at the Edge, enabling real-time monitoring and autonomous decision-making as foundation of a Digital Twin",
      companyLogo: <FaApple size={48} className="text-gray-700" />,
      companyName: "",
    },
    {
      name: "Wireless Freedom",
      jobTitle: "Cable-free connectivity for Fixed Assets",
      message:
        "Independence from cables. Connecting machines and robots via 5G allows flexible production floors and machines.",
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
      <h2 className="text-3xl font-semibold text-center mb-10">
        Solving Real-World Challenges with FlexNet
      </h2>
      <h3>
        See how FlexNet helps businesses across various industries to improve
        efficiency, safety, and innovation
      </h3>
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
