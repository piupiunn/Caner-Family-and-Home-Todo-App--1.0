import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

// Data for the Pie Chart based on the 6 concentric circles
const level1Data = [{ name: "FlexNet", value: 1 }];
const level2Data = [
  { name: "4G", value: 1 },
  { name: "5G", value: 1 },
  { name: "4G+5G", value: 1 },
];
const level3Data = [
  { name: "Indoor", value: 1 },
  { name: "Outdoor", value: 1 },
  { name: "Indoor+Outdoor", value: 1 },
];
const level4Data = [
  { name: "On-Prem", value: 1 },
  { name: "Cloud", value: 1 },
  { name: "On-Prem Portable", value: 1 },
];
const level5Data = [
  { name: "EDGE Computing", value: 1 },
  { name: "No EDGE Computing", value: 1 },
];
const level6Data = [
  { name: "Flexnet Marketplace", value: 1 },
  {
    name: "Computer Vision | Mobility | IoT | Worker Safety | Asset Tracking | Drone Inspection | Energy Saving",
    value: 1,
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

// Custom SVG for curved text
const CircularText = () => (
  <svg
    width="500"
    height="500"
    viewBox="0 0 500 500"
    style={{
      position: "absolute",
      top: "50px",
      left: "43px",
      pointerEvents: "none",
    }}
  >
    <defs>
      {/* Define paths for each level */}
      <path
        id="level1"
        d="M200,200 m-10,0 a10,10 0 1,1 20,0 a10,10 0 1,1 -20,0"
      />
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
    <text fill="#fff" fontSize="9" textAnchor="middle">
      <textPath href="#level1" startOffset="52%">
        FlexNet
      </textPath>
    </text>
    <text fill="#fff" fontSize="9" textAnchor="middle">
      <textPath href="#level2" startOffset="40%">
        4G
      </textPath>
      <textPath href="#level2" startOffset="70%">
        5G
      </textPath>
      <textPath href="#level2" startOffset="100%">
        4G+5G
      </textPath>
    </text>
    <text fill="#fff" fontSize="9" textAnchor="middle">
      <textPath href="#level3" startOffset="25%">
        Indoor
      </textPath>
      <textPath href="#level3" startOffset="55%">
        Outdoor
      </textPath>
      <textPath href="#level3" startOffset="85%">
        Indoor+Outdoor
      </textPath>
    </text>
    <text fill="#fff" fontSize="9" textAnchor="middle">
      <textPath href="#level4" startOffset="30%">
        On-Prem
      </textPath>
      <textPath href="#level4" startOffset="60%">
        Cloud
      </textPath>
      <textPath href="#level4" startOffset="90%">
        On-Prem Portable
      </textPath>
      CircularText
    </text>
    <text fill="#fff" fontSize="9" textAnchor="middle">
      <textPath href="#level5" startOffset="45%">
        EDGE Computing
      </textPath>
      <textPath href="#level5" startOffset="75%">
        No EDGE Computing
      </textPath>
    </text>
    <text fill="#fff" fontSize="9" textAnchor="middle">
      <textPath href="#level6" startOffset="30%">
        Computer Vision | Mobility | IoT | Worker Safety | Asset Tracking |
        Drone Inspection | Energy Saving
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
        <Tooltip />

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
