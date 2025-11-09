import React from "react";
import { Link } from "react-router-dom"; // ✅ Using only react-router-dom
import { FaHome, FaUtensils, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import "../styles/header.css";
import Logo from "../imgs/logo.png";

function Header() {
  return (
    <header>
      <div className="websiteLogo">
        <Link to="/">
          {" "}
          {/* ✅ use Link instead of <a> */}
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className="NavHeader">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <FaHome /> Home
              </Link>
            </li>

            <li>
              <Link to="/menu">
                <FaUtensils /> Menu
              </Link>
            </li>

            <li>
              <Link to="/about">
                <FaInfoCircle /> About
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <FaPhoneAlt /> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
