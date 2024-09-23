import React from "react";
import { HiOutlineInbox } from "react-icons/hi2";

import { PiPhoneLight } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-parent">
      <div className="footer-grid">
        <div className="footer-container">
          <img src="" alt="logo" />
        </div>
        <div className="footer-container">
          <ul>
            <li className="footer-address">
              Clemensstr. 30, D-80803 <span>Munich, Germany</span>
            </li>
            <li>
              <PiPhoneLight /> +123456789
            </li>

            <li>
              <HiOutlineInbox />
              contact@flexnet.de
            </li>
          </ul>
        </div>
        <div className="footer-container">
          <ul>
            <li>
              <Link>Vertical Solutions</Link>
            </li>
            <li>
              <Link>Connectivity</Link>
            </li>
            <Link>Use Cases</Link>
            <li></li>
          </ul>
        </div>
        <div className="footer-container">
          <ul>
            <li>
              <Link>Partners</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <Link>FAQ</Link>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
