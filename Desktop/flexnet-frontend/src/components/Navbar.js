import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="wrapper">
      <div className="navbar-container">
        <div className="logo-container">
          <img id="logo-img" src="" alt="*" />
        </div>
        <div className="navbar-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/vertical-solutions">Vertical Solutions</Link>
            </li>
            <li>
              <Link to="/connectivity">Connectivity</Link>
            </li>
            <li>
              <Link to="/use-cases">Use Cases</Link>
            </li>
            <li>
              <Link to="/partners">Partners</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <button className="contact-button">
                <Link to="/contact-us">Contact</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
