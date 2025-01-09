import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { PrimeReactProvider } from "primereact/api";
import "primeflex/primeflex.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>
);
