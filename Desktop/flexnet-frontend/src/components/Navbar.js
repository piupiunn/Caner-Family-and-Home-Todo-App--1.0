import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Navbar() {
  // State to toggle the megamenu for "Vertical Solutions"
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megamenuRef = useRef(null);
  const megamenuRef2 = useRef(null);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  const closeMegaMenu = () => {
    setIsMegaMenuOpen(false);
  };

  // Handle closing the megamenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megamenuRef.current && !megamenuRef.current.contains(event.target)) {
        closeMegaMenu(); // Close the megamenu if clicked outside
      }
    };

    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [megamenuRef]);

  return (
    <div className="wrapper">
      <div className="navbar-container">
        <div className="logo-container">
          <img id="logo-img" src="" alt="logo" />
        </div>
        <div className="navbar-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item-with-dropdown" ref={megamenuRef}>
              <button onClick={toggleMegaMenu} className="nav-link">
                Vertical Solutions
              </button>
              {/* Conditional rendering of megamenu */}
              {isMegaMenuOpen && (
                <div className="megamenu">
                  <button
                    onClick={closeMegaMenu}
                    ref={megamenuRef2}
                    className="mega-menu-general-link"
                  >
                    <Link to="/vertical-solutions">
                      Go to General Info Page
                    </Link>
                    <FaExternalLinkAlt size={10} className="ml-2" />
                  </button>
                  <div className="megamenu-content">
                    {/* Three lists side by side */}
                    <div className="megamenu-lists">
                      <div className="list">
                        <h4>List 1</h4>
                        <ul>
                          <li>
                            <Link
                              to="/vertical-solutions/item1"
                              onClick={closeMegaMenu}
                            >
                              Item 1
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/vertical-solutions/item2"
                              onClick={closeMegaMenu}
                            >
                              Item 2
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/vertical-solutions/item3"
                              onClick={closeMegaMenu}
                            >
                              Item 3
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/vertical-solutions/item4"
                              onClick={closeMegaMenu}
                            >
                              Item 4
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/vertical-solutions/item5"
                              onClick={closeMegaMenu}
                            >
                              Item 5
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list">
                        <h4>List 2</h4>
                        <ul>
                          <li>
                            <Link
                              to="/vertical-solutions/item6"
                              onClick={closeMegaMenu}
                            >
                              Item 6
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/vertical-solutions/item7"
                              onClick={closeMegaMenu}
                            >
                              Item 7
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/vertical-solutions/item8"
                              onClick={closeMegaMenu}
                            >
                              Item 8
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/vertical-solutions/item9"
                              onClick={closeMegaMenu}
                            >
                              Item 9
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/vertical-solutions/item10"
                              onClick={closeMegaMenu}
                            >
                              Item 10
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list">
                        <h4>List 3</h4>
                        <ul>
                          <li>
                            <Link
                              to="/vertical-solutions/item11"
                              onClick={closeMegaMenu}
                            >
                              Item 11
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/vertical-solutions/item12"
                              onClick={closeMegaMenu}
                            >
                              Item 12
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/vertical-solutions/item13"
                              onClick={closeMegaMenu}
                            >
                              Item 13
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/vertical-solutions/item14"
                              onClick={closeMegaMenu}
                            >
                              Item 14
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/vertical-solutions/item15"
                              onClick={closeMegaMenu}
                            >
                              Item 15
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
              <Link to="/blog-page">Blog</Link>
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
