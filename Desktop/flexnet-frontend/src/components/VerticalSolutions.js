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

export default function VerticalSolutions() {
  const features = [
    {
      icon: <CiWifiOn size={40} className="text-yellow-600" />,
      title: "Flexnet Basic",
      description: "Connectivity for areas with weak or no network coverage",
      bgColor: "bg-yellow-400",
      borderColor: "border-yellow-400",
    },
    {
      icon: <MdConstruction size={24} className="text-teal-500" />,
      title: "Flexnet Construction",
      description: "Worker safety and equipment tracking",
      bgColor: "bg-teal-100",
      borderColor: "border-teal-200",
    },
    {
      icon: <GiMining size={24} className="text-purple-500" />,
      title: "Flexnet Mining",
      description: "Ruggedized mini repeaters and worker safety tracking",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
    },
    {
      icon: <BsCameraReelsFill size={24} className="text-gray-500" />,
      title: "Flexnet Media & Brodcast",
      description: "Live event streaming and content delivery",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-200",
    },
    {
      icon: <GiForklift size={35} className="text-blue-500" />,
      title: "Flexnet Logistics",
      description:
        "Real-time inventory tracking and autonomous vehicle management",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
    },
    {
      icon: <MdCrisisAlert size={24} className="text-pink-500" />,
      title: "Flexnet Crisis",
      description:
        "First responders connectivity enabling immediate coordination",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-200",
    },
    {
      icon: <MdOutlineEnergySavingsLeaf size={24} className="text-green-500" />,
      title: "Flexnet Energy",
      description: "Machinery retrofitting, energy monitoring & saving",
      bgColor: "bg-green-100",
      borderColor: "border-green-200",
    },
    {
      icon: <MdAgriculture size={24} className="text-purple-500" />,
      title: "Flexnet Agriculture",
      description: "Precision farming with IoT-enabled solutions",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
    },
    {
      icon: (
        <MdOutlinePrecisionManufacturing
          size={24}
          className="text-yellow-500"
        />
      ),
      title: "Flexnet Manufacturing",
      description: "Digital twin, worker safety, AGV, automation",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
    },
    {
      icon: <FaShip size={24} className="text-yellow-500" />,
      title: "Flexnet Maritime",
      description: "Ship tracking and port operations",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-200",
    },
    {
      icon: <TbParkingCircle size={24} className="text-red-500" />,
      title: "Flexnet Parking",
      description: "Smart parking management",
      bgColor: "bg-red-100",
      borderColor: "border-red-200",
    },
    {
      icon: <FaArrowUpFromWaterPump size={24} className="text-indigo-500" />,
      title: "Flexnet Port",
      description: "Enhance port operations, AGVs, worker safety",
      bgColor: "bg-indigo-100",
      borderColor: "border-indigo-200",
    },
    {
      icon: <MdConnectingAirports size={30} className="text-orange-500" />,
      title: "Flexnet Airport",
      description: "Maintenance, asset tracking, remote support",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-200",
    },
    {
      icon: <MdOutlineElevator size={30} className="text-cyan-500" />,
      title: "Flexnet Elevator",
      description: "Predicitive maintenance and in-cabin entertainment",
      bgColor: "bg-cyan-100",
      borderColor: "border-cyan-200",
    },
    {
      icon: <FaOilWell size={24} className="text-lime-500" />,
      title: "Flexnet Oil & Gas",
      description: "MC-PTT, Drone Inspection, Surveillance",
      bgColor: "bg-lime-100",
      borderColor: "border-lime-200",
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
      <button className="solution-button shadow-lg">
        <Link to="/vertical-solutions">See Solutions Details</Link>
      </button>
    </div>
  );
}
