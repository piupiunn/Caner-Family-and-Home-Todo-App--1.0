import React, { useState } from "react";

const FlexnetDiagram = () => {
  const [tooltip, setTooltip] = useState("");

  const handleMouseEnter = (text) => {
    setTooltip(text);
  };

  const handleMouseLeave = () => {
    setTooltip("");
  };

  return (
    <div className="flexnet-container">
      {/* Tooltip */}
      {tooltip && <div className="tooltip">{tooltip}</div>}

      {/* Center FlexNet circle */}
      <div className="circle flexnet">
        <span className="label center-label">FlexNet</span>
      </div>

      {/* Rings */}
      <div
        className="circle ring-1"
        onMouseEnter={() =>
          handleMouseEnter("On-Prem: Information about On-Prem")
        }
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-container">
          <span className="label rotate-1">On-Prem</span>
        </div>
      </div>

      <div
        className="circle ring-2"
        onMouseEnter={() => handleMouseEnter("4G+5G: Information about 4G+5G")}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-container">
          <span className="label rotate-2">4G+5G</span>
        </div>
      </div>

      <div
        className="circle ring-3"
        onMouseEnter={() =>
          handleMouseEnter(
            "Indoor + Outdoor: Information about Indoor and Outdoor"
          )
        }
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-container">
          <span className="label rotate-3">Indoor + Outdoor</span>
        </div>
      </div>

      <div
        className="circle ring-4"
        onMouseEnter={() =>
          handleMouseEnter("Cloud / 5G: Information about Cloud and 5G")
        }
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-container">
          <span className="label rotate-4">Cloud / 5G</span>
        </div>
      </div>

      <div
        className="circle ring-5"
        onMouseEnter={() =>
          handleMouseEnter("EDGE Computing: Information about EDGE Computing")
        }
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-container">
          <span className="label rotate-5">EDGE Computing</span>
        </div>
      </div>
    </div>
  );
};

export default FlexnetDiagram;
