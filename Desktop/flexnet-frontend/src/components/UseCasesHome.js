import React from "react";
import { GiMining, GiForklift } from "react-icons/gi";
import { Link } from "react-router-dom";
const UseCaseCard = ({
  icon: Icon,
  title,
  subtitle,
  description,
  iconColor,
  titleColor,
  subtitleColor,
}) => {
  return (
    <div className="usecases-home-box">
      <div className="usecases-home-icon" style={{ color: iconColor }}>
        <Icon />
      </div>
      <div className="usecases-home-bottom">
        <h2 style={{ color: titleColor }}>{title}</h2>
        <h3 style={{ color: subtitleColor }}>{subtitle}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function UseCasesHome() {
  const useCases = [
    {
      icon: GiForklift,
      title: "Mobility",
      subtitle: "Seamlessly Moving People & Things",
      description:
        "Reliable coverage & seamless handover enabling maximum mobility of workers, AGVs and drones regardless of the zone.",
      iconColor: "#1c80cf", // Tomato color for the icon
      titleColor: "#757575", // White color for the title
      subtitleColor: "#1c80cf", // Tomato color for the subtitle
    },
    {
      icon: GiMining,
      title: "Computer Vision",
      subtitle: "Looking via Camera Seeing via AI",
      description:
        "Enabling any connected camera to connect to AI for use in health and safety, hazard detection, and quality assurance.",
      iconColor: "#1c80cf", // Dark Turquoise color for the icon
      titleColor: "#757575", // White color for the title
      subtitleColor: "#1c80cf", // Dark Turquoise color for the subtitle
    },
    {
      icon: GiForklift,
      title: "Real-time Data",
      subtitle: "Sensors opening a new dimension",
      description:
        "Data and AI at the Edge, enabling real-time monitoring and autonomous decision-making as foundation of a Digital Twin.",
      iconColor: "#1c80cf", // Orange color for the icon
      titleColor: "#757575", // White color for the title
      subtitleColor: "#1c80cf", // Orange color for the subtitle
    },
    {
      icon: GiMining,
      title: "Wireless Freedom",
      subtitle: "Cable-free connectivity for Fixed Assets",
      description:
        "Independence from cables. Connecting machines and robots via 5G allows flexible production floors and machines.",
      iconColor: "#1c80cf", // LimeGreen color for the icon
      titleColor: "#757575", // White color for the title
      subtitleColor: "#1c80cf", // LimeGreen color for the subtitle
    },
  ];

  return (
    <div className="usecases-home-parent container mx-auto px-6 py-10">
      {useCases.map((useCase, index) => (
        <UseCaseCard
          key={index}
          icon={useCase.icon}
          title={useCase.title}
          subtitle={useCase.subtitle}
          description={useCase.description}
          iconColor={useCase.iconColor}
          titleColor={useCase.titleColor}
          subtitleColor={useCase.subtitleColor}
        />
      ))}
      <button className="solution-button shadow-lg">
        <Link to="/use-cases">Explore Use Cases</Link>
      </button>
    </div>
  );
}
