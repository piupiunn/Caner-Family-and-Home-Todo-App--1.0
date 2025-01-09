import React from "react";
import SolutionBox from "./SolutionBox";
import { CiWifiOn } from "react-icons/ci";
import {
  MdConstruction,
  MdCrisisAlert,
  MdOutlineEnergySavingsLeaf,
  MdAgriculture,
  MdOutlinePrecisionManufacturing,
  MdConnectingAirports,
  MdOutlineElevator,
} from "react-icons/md";
import { GiMining, GiForklift } from "react-icons/gi";
import { BsCameraReelsFill } from "react-icons/bs";
import { FaShip } from "react-icons/fa";
import { TbParkingCircle } from "react-icons/tb";
import { FaArrowUpFromWaterPump, FaOilWell } from "react-icons/fa6";
import NewVerticalBox from "./NewVerticalBox";
import { Link } from "react-router-dom";

export default function VerticalSolutionsHome() {
  const features = [
    {
      icon: <CiWifiOn size={40} className="text-blue-600" />,
      title: " Basic",
      description: "Connectivity for areas with weak or no network coverage",
      bgColor: "",
      borderColor: "border-blue-400",
    },
    {
      icon: <MdConstruction size={24} className="text-blue-600" />,
      title: "Construction",
      description: "Smart Helmets, safety apps, and more",
      bgColor: "",
      borderColor: "border-blue-400",
    },
    {
      icon: <GiMining size={24} className="text-blue-600" />,
      title: " Mining",
      description: "Rugged devices, safety applications, and worker tracking.",
      bgColor: "",
      borderColor: "border-blue-400",
    },
    {
      icon: <BsCameraReelsFill size={24} className="text-blue-600" />,
      title: "Flexnet Media & Brodcast",
      description: "5G-enabled live streaming and remote production.",
      bgColor: "",
      borderColor: "border-blue-400",
    },
    {
      icon: <GiForklift size={35} className="text-blue-600" />,
      title: "Flexnet Logistics",
      description: "Real-time tracking and asset management solutionst",
      bgColor: "",
      borderColor: "border-blue-400",
    },
    {
      icon: <MdCrisisAlert size={24} className="text-blue-600" />,
      title: "Flexnet Crisis",
      description:
        "First responders connectivity enabling immediate coordination",
      bgColor: "",
      borderColor: "border-blue-400",
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-3 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
      <button className="solution-button shadow-lg">
        <Link to="/vertical-solutions">See Solutions Details</Link>
      </button>
    </div>
  );
}
