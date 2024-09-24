// index.html is pre-configured via create-react-app or Vite

// App.jsx
import React, { useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import { InputSwitch } from "primereact/inputswitch";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css"; // Theme for primereact
import "primereact/resources/primereact.min.css"; // Core primereact CSS
import "primeicons/primeicons.css"; // Prime Icons
import { Link } from "react-router-dom";

function ConnectivityPage() {
  const [technology, setTechnology] = useState("5G");
  const [environment, setEnvironment] = useState("Indoor");
  const [portable, setPortable] = useState(true);
  const [deploymentModel, setDeploymentModel] = useState("On-Prem"); // Default to On-Prem if portable is Yes
  const [edgeComputing, setEdgeComputing] = useState(true);
  const [support, setSupport] = useState("Standard");

  // Technology options
  const technologyOptions = ["5G", "4G", "4G+5G"];
  // Environment options
  const environmentOptions = ["Indoor", "Outdoor", "Both"];
  // Deployment Model (Dynamically updated based on Portable setting)
  const deploymentOptions = portable ? ["On-Prem"] : ["Cloud", "On-Prem"];
  // Support
  const supportOptions = ["Standard", "Premium", "Premium+"];

  // Update SIMs based on the selections
  const updateSimCount = () => {
    if (technology === "5G") {
      return portable ? 20 : 50;
    } else if (technology === "4G+5G") {
      return portable ? 50 : 50;
    } else {
      return portable ? 20 : 50;
    }
  };

  const calculateProductOffer = () => {
    if (technology === "5G") {
      return "5G Cloud EDGE";
    } else if (technology === "4G") {
      return "4G Femtocell Package";
    } else {
      return "5G Femtocell";
    }
  };

  const price = support === "Premium+" ? "800€/month" : "500€/month";

  // Handle Portable Switch
  const handlePortableChange = (value) => {
    setPortable(value);
    if (value) {
      setDeploymentModel("On-Prem"); // Automatically set to On-Prem when Portable is Yes
    } else {
      setDeploymentModel("Cloud"); // Reset to Cloud by default when Portable is No
    }
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="title">Select Your FlexNet</h1>

      <table className="flexnet-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Selection</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h3>Technology</h3>
            </td>
            <td>
              <SelectButton
                value={technology}
                options={technologyOptions}
                onChange={(e) => setTechnology(e.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3>Environment</h3>
            </td>
            <td>
              <SelectButton
                value={environment}
                options={environmentOptions}
                onChange={(e) => setEnvironment(e.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3>Portable</h3>
            </td>
            <td>
              <InputSwitch
                checked={portable}
                onChange={(e) => handlePortableChange(e.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3>Deployment Model</h3>
            </td>
            <td>
              <SelectButton
                value={deploymentModel}
                options={deploymentOptions}
                onChange={(e) => setDeploymentModel(e.value)}
                disabled={portable}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3>Edge Computing</h3>
            </td>
            <td>
              <InputSwitch
                checked={edgeComputing}
                onChange={(e) => setEdgeComputing(e.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3>Support</h3>
            </td>
            <td>
              <SelectButton
                value={support}
                options={supportOptions}
                onChange={(e) => setSupport(e.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3>Number of SIMs</h3>
            </td>
            <td>
              <p>{updateSimCount()} SIMs</p>
            </td>
          </tr>
          <tr>
            <td>
              <h3>We offer (RESULTING PRODUCT)</h3>
            </td>
            <td>
              <p>{calculateProductOffer()}</p>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Price</h3>
            </td>
            <td>
              <p>{price}</p>
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="result-title">The package contains:</h3>
      <ul className="package-list">
        <li>+ 1 {calculateProductOffer()} Femtocell</li>
        <li>+ 1 FlexEDGE Box</li>
        <li>+ {updateSimCount()} SIM Cards</li>
        <li>+ Auxiliaries (GPS, Cable, etc.)</li>
      </ul>

      <button className="contact-button connectivity-page-button">
        <Link to="/contact-us">Contact Sales</Link>
      </button>
    </div>
  );
}

export default ConnectivityPage;
