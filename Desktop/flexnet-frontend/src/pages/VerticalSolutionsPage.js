import React from "react";
import VerticalSolutionsPageBox from "../components/VerticalSolutionsPageBox";
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

export default function VerticalSolutionsPage() {
  const features = [
    {
      icon: <CiWifiOn size={40} className="text-yellow-600" />,
      title: "Flexnet Basic",
      description: "Connectivity for areas with weak or no network coverage",
      bgColor: "bg-yellow-400",
      borderColor: "border-yellow-400",
      details2:
        "Flexnet Basic provides connectivity by deploying 5G-enabled networks that can reach underserved areas. Utilizing technologies like satellite backhaul and mesh networking, it offers reliable communication services, bridging the digital divide and fostering community development.",

      details:
        "Remote and rural areas often suffer from weak or nonexistent network coverage due to the high cost and logistical difficulties of extending traditional infrastructure. This lack of connectivity hampers access to essential services, education, and economic opportunities. ",
    },
    {
      icon: <MdConstruction size={24} className="text-teal-500" />,
      title: "Flexnet Construction",
      description: "Worker safety and equipment tracking",
      bgColor: "bg-teal-100",
      borderColor: "border-teal-200",
      details2:
        "Flexnet Construction employs 5G-connected wearables and IoT sensors to monitor worker safety in real-time. Equipment tracking is enhanced through high-speed 5G networks, ensuring efficient utilization and reducing losses, thereby improving overall site safety and productivity.",
      details:
        "Construction sites are hazardous with frequent accidents due to limited real-time monitoring of workers and equipment. Additionally, tracking valuable machinery to prevent theft and misuse is a constant concern.",
    },
    {
      icon: <GiMining size={24} className="text-purple-500" />,
      title: "Flexnet Mining",
      description: "Ruggedized mini repeaters and worker safety tracking",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
      details2:
        "Flexnet Mining introduces ruggedized mini repeaters compatible with 5G to ensure robust communication underground. Worker safety tracking via 5G-enabled devices allows for immediate response to emergencies, enhancing safety protocols in challenging mining environments.",
      details:
        "Mining operations face extreme conditions where communication networks are unreliable or nonexistent, making worker safety and coordination difficult. The harsh environment also affects equipment functionality.",
    },
    {
      icon: <BsCameraReelsFill size={24} className="text-gray-500" />,
      title: "Flexnet Media & Brodcast",
      description: "Live event streaming and content delivery",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-200",
      details2:
        "Flexnet Media & Broadcast leverages 5G’s high bandwidth and low latency to enable seamless live event streaming. This ensures that content delivery is smooth and interactive features can be integrated, enhancing viewer engagement and satisfaction.",
      details:
        "The media industry struggles with delivering high-quality live content due to bandwidth limitations and latency issues, which affect viewer experience during live events. ",
    },
    {
      icon: <GiForklift size={35} className="text-blue-500" />,
      title: "Flexnet Logistics",
      description:
        "Real-time inventory tracking and autonomous vehicle management",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
      details2:
        "Flexnet Logistics utilizes 5G connectivity for instant data transmission from IoT sensors, providing real-time inventory tracking. It also manages autonomous vehicles like AGVs with precise control and coordination, optimizing warehouse operations and reducing errors.",
      details:
        "Logistics companies grapple with real-time inventory visibility and managing autonomous vehicles in warehouses, leading to inefficiencies and increased operational costs. ",
    },
    {
      icon: <MdCrisisAlert size={24} className="text-pink-500" />,
      title: "Flexnet Crisis",
      description:
        "First responders connectivity enabling immediate coordination",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-200",
      details2:
        "Flexnet Crisis establishes immediate 5G connectivity for first responders, ensuring reliable communication even when other networks are down. This enables swift coordination and data sharing, improving response times and effectiveness in crisis situations.",
      details:
        " During disasters, conventional communication networks often fail, hindering coordination among first responders and delaying emergency services.",
    },
    {
      icon: <MdOutlineEnergySavingsLeaf size={24} className="text-green-500" />,
      title: "Flexnet Energy",
      description: "Machinery retrofitting, energy monitoring & saving",
      bgColor: "bg-green-100",
      borderColor: "border-green-200",
      details2:
        "Flexnet Energy offers machinery retrofitting with 5G-enabled sensors for real-time energy monitoring. This allows for predictive maintenance and energy-saving strategies, reducing operational costs and environmental impact.",
      details:
        "Energy sectors deal with outdated machinery lacking modern monitoring, leading to inefficiencies, increased energy consumption, and unexpected downtime.",
    },
    {
      icon: <MdAgriculture size={24} className="text-purple-500" />,
      title: "Flexnet Agriculture",
      description: "Precision farming with IoT-enabled solutions",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
      details2:
        "Flexnet Agriculture deploys IoT-enabled solutions over 5G networks to facilitate precision farming. Sensors collect data on soil health, moisture, and crop conditions, allowing farmers to make informed decisions, improve yields, and conserve resources.",
      details:
        "Farmers need precise data to optimize crop yields, but limited connectivity in rural areas restricts the use of advanced agricultural technologies. ",
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
      details2:
        "Flexnet Manufacturing provides ultra-reliable, low-latency 5G connectivity to support digital twin technology, real-time automation, and AGV operations. It enhances worker safety through connected devices, streamlining processes and increasing efficiency.",
      details:
        "Manufacturing industries aim to adopt automation and digital twins but face challenges due to network latency and insufficient data handling capabilities. ",
    },
    {
      icon: <FaShip size={24} className="text-yellow-500" />,
      title: "Flexnet Maritime",
      description: "Ship tracking and port operations",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-200",
      details2:
        "Flexnet Maritime extends 5G coverage to maritime environments, enabling real-time ship tracking and improved communication between vessels and ports. This enhances navigational safety and streamlines port logistics.",
      details:
        "Maritime operations require constant communication for ship tracking and efficient port operations, but are hindered by limited connectivity at sea.",
    },
    {
      icon: <TbParkingCircle size={24} className="text-red-500" />,
      title: "Flexnet Parking",
      description: "Smart parking management",
      bgColor: "bg-red-100",
      borderColor: "border-red-200",
      details2:
        "Flexnet Parking implements smart parking systems using 5G-connected sensors to provide real-time availability updates. Drivers can find parking spots quickly via mobile apps, reducing congestion and improving urban traffic flow. ",
      details:
        "Urban areas face parking shortages and traffic congestion due to inefficient parking management, leading to driver frustration and increased emissions.",
    },
    {
      icon: <FaArrowUpFromWaterPump size={24} className="text-indigo-500" />,
      title: "Flexnet Port",
      description: "Enhance port operations, AGVs, worker safety",
      bgColor: "bg-indigo-100",
      borderColor: "border-indigo-200",
      details2:
        "Flexnet Port enhances port operations by integrating 5G connectivity for AGVs and equipment management. Worker safety is improved through real-time tracking and alerts, optimizing operations and minimizing accidents.",
      details:
        "Ports handle massive volumes of cargo and require efficient coordination of equipment and personnel, with safety being a critical concern.",
    },
    {
      icon: <MdConnectingAirports size={30} className="text-orange-500" />,
      title: "Flexnet Airport",
      description: "Maintenance, asset tracking, remote support",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-200",
      details2:
        "Flexnet Airport uses 5G networks for high-speed data transfer, enabling predictive maintenance and real-time asset tracking. Remote support through augmented reality enhances maintenance efficiency, leading to smoother airport operations.",
      details:
        "Airports need efficient maintenance and asset tracking to prevent delays, but traditional networks can't support the required data transmission for remote support. ",
    },
    {
      icon: <MdOutlineElevator size={30} className="text-cyan-500" />,
      title: "Flexnet Elevator",
      description: "Predicitive maintenance and in-cabin entertainment",
      bgColor: "bg-cyan-100",
      borderColor: "border-cyan-200",
      details2:
        "Flexnet Elevator offers predictive maintenance using 5G-connected sensors to detect issues before they cause downtime. In-cabin entertainment delivered via 5G enhances the user experience, adding value to building services.",
      details:
        "Elevator downtime disrupts building operations, and there's increasing demand for enhanced passenger experiences during rides. ",
    },
    {
      icon: <FaOilWell size={24} className="text-lime-500" />,
      title: "Flexnet Oil & Gas",
      description: "MC-PTT, Drone Inspection, Surveillance",
      bgColor: "bg-lime-100",
      borderColor: "border-lime-200",
      details2:
        "Flexnet Oil & Gas employs 5G-enabled MC-PTT for secure, instant communication. Drone inspections and surveillance over 5G networks allow for safe, efficient monitoring of facilities, reducing risk and improving operational safety.",
      details:
        "Oil and gas industries operate in remote areas with hazardous conditions, making communication, inspections, and surveillance challenging. ",
    },
  ];

  return (
    <div>
      <h1 className="section-titles vertical-solutions-page-title">
        One Product, Many Solutions
      </h1>
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {features.map((feature, index) => (
          <VerticalSolutionsPageBox
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            bgColor={feature.bgColor}
            borderColor={feature.borderColor}
            details={feature.details}
            details2={feature.details2}
          />
        ))}
      </div>
    </div>
  );
}
