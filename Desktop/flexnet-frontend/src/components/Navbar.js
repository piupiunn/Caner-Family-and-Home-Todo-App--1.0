import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  // State to toggle the megamenu for "Vertical Solutions"
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megamenuRef = useRef(null);
  const megamenuRef2 = useRef(null);

  const navigate = useNavigate(); // useNavigate hook

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

  const menuRight = useRef(null);
  const toast = useRef(null);
  const items = [
    {
      items: [
        {
          label: "Home",
          command: () => navigate("/"), // Yönlendirme için command kullanıyoruz
        },
      ],
    },
    {
      label: "Vertical Solutions",
      items: [
        {
          label: "Item 1",
          command: () => navigate("/vertical-solutions/item1"),
        },
        {
          label: "Item 2",
          command: () => navigate("/vertical-solutions/item2"),
        },

        {
          label: "Item 3",
          command: () => navigate("/vertical-solutions/item3"),
        },

        {
          label: "Item 4",
          command: () => navigate("/vertical-solutions/item4"),
        },

        {
          label: "Item 5",
          command: () => navigate("/vertical-solutions/item5"),
        },

        {
          label: "Item 6",
          command: () => navigate("/vertical-solutions/item6"),
        },

        {
          label: "General Info Page",
          command: () => navigate("/vertical-solutions"),
        },
      ],
    },
    {
      items: [
        {
          label: "Connectivity",
          command: () => navigate("/connectivity"),
        },
      ],
    },
    {
      items: [
        {
          label: "Use Cases",
          command: () => navigate("/use-cases"),
        },
      ],
    },
    {
      items: [
        {
          label: "Partners",
          command: () => navigate("/partners"),
        },
      ],
    },
    {
      items: [
        {
          label: "Blog",
          command: () => navigate("/blog-page"),
        },
      ],
    },
    {
      items: [
        {
          label: "FAQ",
          command: () => navigate("/faq"),
        },
      ],
    },
    {
      items: [
        {
          label: "Contact Us",
          command: () => navigate("/contact-us"),
        },
      ],
    },
  ];

  return (
    <div className="wrapper-navbar">
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

        <div className="mobile-navbar">
          <Toast ref={toast}></Toast>

          <Menu
            model={items}
            popup
            ref={menuRight}
            id="popup_menu_right"
            popupAlignment="right"
          />
          <Button
            label="Menu"
            icon="pi pi-align-right"
            className="mr-2"
            onClick={(event) => menuRight.current.toggle(event)}
            aria-controls="popup_menu_right"
            aria-haspopup
          />
        </div>
      </div>
    </div>
  );
}
