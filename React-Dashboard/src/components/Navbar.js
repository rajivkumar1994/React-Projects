import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FAIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

import { SidebarData } from "./SidebarData";
import "./Navbar.css";

const Navbar = () => {
  // useState -> initial state and function to set the state (state -> sidebar  function -> setSidebar)
  const [sidebar, setSidebar] = useState(false); // initial sidebar state value as false (means sidebar is hidden)
  // Function to update sidebar value
  const showSidebar = () => {
    setSidebar(!sidebar); // when sidebar is false, change it to true (means sidebar is active)
  };

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FAIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
