import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

// Data for the Pie Chart based on the 6 concentric circles
const level1Data = [{ name: "FlexNet", value: 1 }];
const level2Data = [
  { name: "4G", value: 1, tooltip: "This is 4G" },
  { name: "5G", value: 1, tooltip: "This is 5G" },
  { name: "4G+5G", value: 1, tooltip: "This is 4G+5G" },
];
const level3Data = [
  { name: "Indoor", value: 1, tooltip: "Indoor coverage" },
  { name: "Outdoor", value: 1, tooltip: "Outdoor coverage" },
  { name: "Indoor+Outdoor", value: 1, tooltip: "Both indoor and outdoor" },
];
const level4Data = [
  { name: "On-Prem", value: 1, tooltip: "On-Premise solution" },
  { name: "Cloud", value: 1, tooltip: "Cloud solution" },
  { name: "On-Prem Portable", value: 1, tooltip: "On-Prem Portable solution" },
];
const level5Data = [
  { name: "EDGE Computing", value: 1, tooltip: "Edge computing enabled" },
  { name: "No EDGE Computing", value: 1, tooltip: "No Edge computing" },
];
const level6Data = [
  { name: "Flexnet Marketplace", value: 1, tooltip: "Flexnet Marketplace" },
  {
    name: "Computer Vision | Mobility | IoT | Worker Safety | Asset Tracking | Drone Inspection | Energy Saving",
    value: 1,
    tooltip:
      "Computer Vision, Mobility, IoT, Worker Safety, Asset Tracking, and more",
  },
];

// Colors for each ring (one color per ring)
const ringColors = [
  "#004f98", // Color for level 1
  "#2896bb", // Color for level 2
  "#779f9b", // Color for level 3
  "#cb934c", // Color for level 4
  "#004f98", // Color for level 5
  "#2896bb", // Color for level 6
];

// Custom Tooltip Renderer
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        <p>{payload[0].payload.tooltip}</p>
      </div>
    );
  }
  return null;
};

// Custom SVG for curved text
const CircularText = () => (
  <svg
    className="connectivity-chart"
    width="600"
    height="600"
    viewBox="0 0 600 600"
    style={{
      position: "absolute",

      pointerEvents: "none",
    }}
  >
    <defs>
      {/* Define paths for each level */}

      <path
        id="level2"
        d="M200,200 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
      />
      <path
        id="level3"
        d="M200,200 m-90,0 a90,90 0 1,1 180,0 a90,90 0 1,1 -180,0"
      />
      <path
        id="level4"
        d="M200,200 m-130,0 a130,130 0 1,1 260,0 a130,130 0 1,1 -260,0"
      />
      <path
        id="level5"
        d="M200,200 m-170,0 a170,170 0 1,1 340,0 a170,170 0 1,1 -340,0"
      />
      <path
        id="level6"
        d="M200,200 m-210,0 a210,210 0 1,1 420,0 a210,210 0 1,1 -420,0"
      />
    </defs>

    {/* Add text following the paths */}
    <text
      x="200"
      y="200"
      fill="#fff"
      fontSize="14"
      textAnchor="middle"
      dominantBaseline="middle"
      transform="rotate(90 200 200)"
    >
      FlexNet
    </text>
    <text fill="#fff" fontSize="9" textAnchor="middle">
      <textPath href="#level2" startOffset="33%">
        4G
      </textPath>
      <textPath href="#level2" startOffset="3%">
        5G
      </textPath>
      <textPath href="#level2" startOffset="65%">
        4G+5G
      </textPath>
    </text>
    <text fill="#fff" fontSize="9" textAnchor="middle">
      <textPath href="#level3" startOffset="33%">
        Indoor
      </textPath>
      <textPath href="#level3" startOffset="3%">
        Outdoor
      </textPath>
      <textPath href="#level3" startOffset="68%">
        Indoor+Outdoor
      </textPath>
    </text>
    <text fill="#fff" fontSize="9" textAnchor="middle">
      <textPath href="#level4" startOffset="68%">
        On-Prem
      </textPath>
      <textPath href="#level4" startOffset="98.5%">
        Cloud
      </textPath>
      <textPath href="#level4" startOffset="33%">
        On-Prem Portable
      </textPath>
    </text>
    <text fill="#fff" fontSize="9" textAnchor="middle">
      <textPath href="#level5" startOffset="25%">
        EDGE Computing
      </textPath>
      <textPath href="#level5" startOffset="75%">
        No EDGE Computing
      </textPath>
    </text>
    <text className="text6" fill="#fff" fontSize="9" textAnchor="middle">
      <textPath href="#level6" startOffset="75%">
        Computer Vision | Mobility | IoT | Worker Safety | Asset Tracking |
        Drone Inspection | Energy Saving
      </textPath>
      <textPath href="#level6" startOffset="25%">
        Flexnet Marketplace
      </textPath>
    </text>
  </svg>
);

// Main Component
const ConnectivityChart = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "500px",
        height: "500px",
        transform: "rotate(-90deg)",
      }}
    >
      {/* Recharts Pie Chart */}
      <PieChart width={500} height={500}>
        <Tooltip content={<CustomTooltip />} />

        {/* Level 1 (Center) */}
        <Pie
          data={level1Data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={35}
          fill={ringColors[0]}
          labelLine={false}
        >
          {level1Data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={ringColors[0]} />
          ))}
        </Pie>

        {/* Level 2 */}
        <Pie
          data={level2Data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={75}
          fill={ringColors[1]}
          labelLine={false}
        >
          {level2Data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={ringColors[1]} />
          ))}
        </Pie>

        {/* Level 3 */}
        <Pie
          data={level3Data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={115}
          fill={ringColors[2]}
          labelLine={false}
        >
          {level3Data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={ringColors[2]} />
          ))}
        </Pie>

        {/* Level 4 */}
        <Pie
          data={level4Data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={120}
          outerRadius={155}
          fill={ringColors[3]}
          labelLine={false}
        >
          {level4Data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={ringColors[3]} />
          ))}
        </Pie>

        {/* Level 5 (Outer circle) */}
        <Pie
          data={level5Data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={160}
          outerRadius={195}
          fill={ringColors[4]}
          labelLine={false}
        >
          {level5Data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={ringColors[4]} />
          ))}
        </Pie>

        {/* Level 6 (Outermost circle) */}
        <Pie
          data={level6Data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={200}
          outerRadius={230}
          fill={ringColors[5]}
          labelLine={false}
        >
          {level6Data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={ringColors[5]} />
          ))}
        </Pie>
      </PieChart>

      {/* SVG for Circular Text */}
      <CircularText />
    </div>
  );
};

export default ConnectivityChart;
