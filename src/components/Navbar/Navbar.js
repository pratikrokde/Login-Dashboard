import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>Home</li>

        <li>
          <Link to="/dashboard" className="link">
            Dashboard
          </Link>
        </li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>
          <Link to="/login" className="link">
            Log In
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
