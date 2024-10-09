import React, { useState } from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { SelectButton } from "primereact/selectbutton";

// List of public domains not allowed
const publicDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
];

// Utility function to validate business email format
const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) return false;
  const domain = email.split("@")[1].toLowerCase();
  return !publicDomains.includes(domain);
};

// List of countries
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (North)",
  "Korea (South)",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// List of European countries
const europeanCountries = [
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Vatican City",
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal visibility
  const [email, setEmail] = useState(""); // Email input
  const [consent, setConsent] = useState(false); // Consent checkbox

  const [technology, setTechnology] = useState("4G"); // Selected technology
  const [environment, setEnvironment] = useState("Indoor"); // Selected environment
  const [deploymentModel, setDeploymentModel] = useState("On-Prem"); // Selected deployment model

  const [isSubmitted, setIsSubmitted] = useState(false); // State for form submission
  const [showPricing, setShowPricing] = useState(false); // Show pricing after submit
  const [optionalInfo, setOptionalInfo] = useState({
    country: "",
    industry: "",
    indoorArea: "",
    outdoorArea: "",
    longitude: "",
    latitude: "",
    supportUpgrade: "Basic",
    edgeComputing: "No",
    floorPlan: null,
  });

  const technologyOptions = ["4G", "5G", "4G+5G"]; // Technology options
  const environmentOptions = ["Indoor", "Outdoor", "Both"]; // Environment options
  const deploymentOptions = ["On-Prem", "Cloud"]; // Deployment Model options

  // Pricing Data for various combinations (Simplified for demo purposes)
  const pricingData = {
    "4G": {
      Indoor: {
        "On-Prem": { price: "€11200.99", yearly: "€1299.15" },
        Cloud: { price: "€14000.00", yearly: "€1599.99" },
      },
      Outdoor: {
        "On-Prem": { price: "€13000.99", yearly: "€1399.15" },
        Cloud: { price: "€15000.00", yearly: "€1799.99" },
      },
    },
    "5G": {
      Indoor: {
        "On-Prem": { price: "€15000.99", yearly: "€2299.15" },
        Cloud: { price: "€18000.00", yearly: "€2799.99" },
      },
      Outdoor: {
        "On-Prem": { price: "€17000.99", yearly: "€2399.15" },
        Cloud: { price: "€20000.00", yearly: "€2999.99" },
      },
    },
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(email) && consent) {
      const existingData =
        JSON.parse(localStorage.getItem("flexnetConfig")) || {};

      const formData = {
        ...existingData,
        email,
      };

      localStorage.setItem("flexnetConfig", JSON.stringify(formData));
      setIsModalOpen(false); // Close modal if valid
    } else {
      alert(
        "Please enter a valid business email and accept the consent checkbox."
      );
    }
  };

  // Handle the second form submission (Technology, Environment, Deployment Model)
  const handleFormSubmit2 = (e) => {
    e.preventDefault();
    if (technology && environment && deploymentModel) {
      const existingData =
        JSON.parse(localStorage.getItem("flexnetConfig")) || {};

      const formData2 = {
        ...existingData,
        technology,
        environment,
        deploymentModel,
      };

      localStorage.setItem("flexnetConfig", JSON.stringify(formData2));

      setShowPricing(true); // Show pricing after submit
      setIsSubmitted(true); // Mark the form as submitted
    } else {
      alert("Please select all fields.");
    }
  };

  // Handle optional info form submission
  const handleOptionalInfoSubmit = (e) => {
    e.preventDefault();
    const existingData =
      JSON.parse(localStorage.getItem("flexnetConfig")) || {};

    const optionalFormData = {
      ...existingData,
      optionalInfo,
    };

    localStorage.setItem("flexnetConfig", JSON.stringify(optionalFormData));

    alert(
      "Thank you for the additional information. We will review it and get back to you."
    );
  };

  const getPricingDetails = () => {
    if (technology && environment && deploymentModel) {
      const details = pricingData[technology]?.[environment]?.[deploymentModel];
      if (!details) {
        return <p>No pricing information available for this configuration.</p>;
      }
      return (
        <tr>
          <td>{technology}</td>
          <td>{environment}</td>
          <td>{deploymentModel}</td>
          <td>{details.price}</td>
          <td>{details.yearly}</td>
        </tr>
      );
    }
    return null;
  };

  const getImageForSelection = () => {
    // Choose an image based on the selection, for example:
    if (technology === "5G" && environment === "Indoor") {
      return "https://www.pngplay.com/wp-content/uploads/6/Computer-Accessories-Background-PNG-Image.png";
    } else if (technology === "4G" && environment === "Outdoor") {
      return "https://static.vecteezy.com/system/resources/previews/024/046/205/non_2x/black-mouse-computer-accessories-on-transparent-background-free-png.png";
    } else if (deploymentModel === "Cloud") {
      return "https://source.unsplash.com/600x400/?cloud,technology";
    }
    return "https://source.unsplash.com/600x400/?technology";
  };

  // Function to get message based on selected country
  const getCountryMessage = () => {
    const selectedCountry = optionalInfo.country;

    if (selectedCountry === "Germany") {
      return "Hello 1";
    } else if (selectedCountry === "United Kingdom") {
      return "Hello 2";
    } else if (europeanCountries.includes(selectedCountry)) {
      return "You are within our coverage.";
    } else {
      return "The local spectrum is not available for private networks. We will check possible options and get back to you.";
    }
  };

  return (
    <div className="container connectivity-main-page mx-auto px-6 py-10">
      {/* Modal for email and consent */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Enter Your Business Email</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter business email"
                required
              />
              <div>
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <label htmlFor="consent">
                  I agree to be contacted for communication purposes.
                </label>
              </div>
              <Button
                className=" connectivity-main-buttons"
                type="submit"
                label="Submit"
              />
            </form>
          </div>
        </div>
      )}

      {!isModalOpen && (
        <div>
          <h1>Select Your FlexNet Configuration</h1>

          {/* Part 1: Selection */}
          <table className="flexnet-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Selection</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Technology</td>
                <td>
                  <SelectButton
                    className="connectivity-main-buttons"
                    value={technology}
                    options={technologyOptions}
                    onChange={(e) => setTechnology(e.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Environment</td>
                <td>
                  <SelectButton
                    connectivity-main-buttons
                    value={environment}
                    options={environmentOptions}
                    onChange={(e) => setEnvironment(e.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Deployment Model</td>
                <td>
                  <SelectButton
                    connectivity-main-buttons
                    value={deploymentModel}
                    options={deploymentOptions}
                    onChange={(e) => setDeploymentModel(e.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <Button
            className="show-pricing"
            onClick={handleFormSubmit2}
            label="Show Pricing"
          />

          {/* Part 2: Display results based on selections */}
          {showPricing && (
            <div>
              <table className="flexnet-table">
                <thead>
                  <tr>
                    <th>Technology</th>
                    <th>Environment </th>
                    <th>Deployment Model</th>
                    <th>One-Time Price</th>
                    <th>Yearly Price</th>
                  </tr>
                </thead>
                <tbody>{getPricingDetails()}</tbody>
              </table>

              {/* Display corresponding image based on selection */}
              <div className="image-container">
                <img
                  src={getImageForSelection()}
                  alt="Selected Configuration"
                />
              </div>
              <span>
                PS:In this package you will get: BoM, Basic Support without EDGE
                Computing option
              </span>
              <br />
              <span>
                Our experts will contact you to finalize the delivery plan.
              </span>
            </div>
          )}

          {/* Part 3: Additional Information (shown after submission) */}
          {isSubmitted && (
            <div className="optional-info-section">
              <h2>3. Additional Information</h2>
              <form onSubmit={handleOptionalInfoSubmit}>
                {/* Country Dropdown */}
                <div className="country-select">
                  <label htmlFor="country">Country (Mandatory):</label>
                  <select
                    id="country"
                    value={optionalInfo.country}
                    onChange={(e) =>
                      setOptionalInfo({
                        ...optionalInfo,
                        country: e.target.value,
                      })
                    }
                    required
                  >
                    <option value=""></option>
                    {countryList.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional fields remain the same */}
                <div>
                  <label htmlFor="industry">Industry:</label>
                  <input
                    type="text"
                    id="industry"
                    value={optionalInfo.industry}
                    onChange={(e) =>
                      setOptionalInfo({
                        ...optionalInfo,
                        industry: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="indoorArea">Indoor Area (m2):</label>
                  <input
                    type="number"
                    id="indoorArea"
                    value={optionalInfo.indoorArea}
                    onChange={(e) =>
                      setOptionalInfo({
                        ...optionalInfo,
                        indoorArea: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="outdoorArea">Outdoor Area (m2):</label>
                  <input
                    type="number"
                    id="outdoorArea"
                    value={optionalInfo.outdoorArea}
                    onChange={(e) =>
                      setOptionalInfo({
                        ...optionalInfo,
                        outdoorArea: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="longitude">Longitude:</label>
                  <input
                    type="text"
                    id="longitude"
                    value={optionalInfo.longitude}
                    onChange={(e) =>
                      setOptionalInfo({
                        ...optionalInfo,
                        longitude: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="latitude">Latitude:</label>
                  <input
                    type="text"
                    id="latitude"
                    value={optionalInfo.latitude}
                    onChange={(e) =>
                      setOptionalInfo({
                        ...optionalInfo,
                        latitude: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="last-choice">
                  <label htmlFor="supportUpgrade">
                    Support Upgrade Options:
                  </label>
                  <SelectButton
                    className="connectivity-last-choice-buttons"
                    value={optionalInfo.supportUpgrade}
                    options={["Basic", "Premium"]}
                    onChange={(e) =>
                      setOptionalInfo({
                        ...optionalInfo,
                        supportUpgrade: e.value,
                      })
                    }
                  />
                </div>
                <div className="last-choice">
                  <label htmlFor="edgeComputing">Edge Computing:</label>
                  <SelectButton
                    className="connectivity-last-choice-buttons"
                    value={optionalInfo.edgeComputing}
                    options={["Yes", "No"]}
                    onChange={(e) =>
                      setOptionalInfo({
                        ...optionalInfo,
                        edgeComputing: e.value,
                      })
                    }
                  />
                </div>
                <div className="floor-plan">
                  <label htmlFor="floorPlan">
                    Upload Floor Plan / Photo of Location:
                  </label>
                  <input
                    type="file"
                    id="floorPlan"
                    onChange={(e) =>
                      setOptionalInfo({
                        ...optionalInfo,
                        floorPlan: e.target.files[0],
                      })
                    }
                  />
                </div>
                <Button
                  className="bottom-submit-connect"
                  type="submit"
                  label="Submit Additional Info"
                />
              </form>

              {/* Display a thank you message after submitting */}
              <div className="thank-you-message">
                {optionalInfo.country && <p>{getCountryMessage()}</p>}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
