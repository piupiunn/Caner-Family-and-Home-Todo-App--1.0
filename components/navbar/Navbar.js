import React from "react";
import { Link } from "react-router-dom";

//style
import "./Navbar.css";
//image
import Logo from "../../assets/logo_icon.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Logo} alt="app logo" />
          <span>Caner Family-Home Todo App</span>
        </li>

        <li>
          <Link className="nav-buttons" to="/create">
            Create Todo
          </Link>
        </li>

        <li>
          <Link className="nav-buttons" to="/login">
            Login
          </Link>
        </li>

        <li>
          <Link className="nav-buttons" to="/signup">
            Signup
          </Link>
        </li>

        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
}
