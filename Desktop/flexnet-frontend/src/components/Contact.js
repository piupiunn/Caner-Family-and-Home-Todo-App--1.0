import React from "react";
import { FiSend } from "react-icons/fi";
import { PiPhoneLight } from "react-icons/pi";
import { PiTwitterLogoLight } from "react-icons/pi";
import { HiOutlineInbox } from "react-icons/hi2";
import { PiArrowRightLight } from "react-icons/pi";

import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contact-parent container mx-auto px-6 py-10">
      <div className="contact-grid">
        <div className="contact-left">
          <div className="contact-left-box">
            <div className="contact-form-field">
              <form action="">
                <div className="contact-input">
                  <label htmlFor="name">Name</label>
                  <input id="contact-name" type="text" />
                </div>
                <div className="contact-input">
                  <label htmlFor="email">Email</label>
                  <input id="contact-email" type="text" />
                </div>
                <div className="contact-input">
                  <label htmlFor="company">Company</label>
                  <input id="contact-company" type="text" />
                </div>
                <div className="contact-input">
                  <label htmlFor="mesage">Message</label>
                  <textarea id="contact-mesage" type="text" />
                </div>
                <button className="contact-button">
                  <FiSend /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <Link>
            View Adress on Google Maps <PiArrowRightLight />
          </Link>
          <ul>
            <li>
              <PiPhoneLight /> +123456789
            </li>
            <li>
              <PiTwitterLogoLight />
              @flexnet
            </li>
            <li>
              <HiOutlineInbox />
              contact@flexnet.de
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
