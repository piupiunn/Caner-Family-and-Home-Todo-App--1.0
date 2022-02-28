import React from "react";
import { NavLink } from "react-router-dom";

//style
import "./Sidebar.css";
//image
import DashboardIcon from "../../assets/dashboard_icon.svg";
import AddIcon from "../../assets/add_icon.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/**avatar and username here later */}
          <p>Hey User</p>
        </div>
      </div>
      <nav className="links">
        <ul>
          <li>
            <NavLink to="/">
              <img src={DashboardIcon} alt="dashboard icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/create">
              <img src={AddIcon} alt="add todo icon" />
              <span>New Todo</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
