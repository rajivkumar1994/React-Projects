import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "white"
  };
  return (
    <nav className="navbar navbar-dark bg-primary">
      <h3 className="heading-center"> WELCOME TO REACT DEMO </h3>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link style={navStyle} to="/register">
          <li> Register </li>
        </Link>
        <Link style={navStyle} to="/login">
          <li> Login </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
