import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import ForkMaggie from "../imgs/pngfood2.png";
import logoWeb from "../imgs/logo.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <footer className="footer_container_tag" data-aos="fade-right">
        {/* Left Main Section */}
        <div className="footer_content_O1">
          <div className="footer_content_image">
            <img src={ForkMaggie} alt="Fork Maggie" />
          </div>
          <div className="footer_content_text">
            <img src={logoWeb} alt="Logo" />
            <h1>Want To Taste Our Food?</h1>
            <button>Order Online</button>
          </div>
        </div>

        {/* About Section */}
        <div className="footer_container_about">
          <ul>
            <h2>About Us</h2>
            <li>Service</li>
            <li>Career</li>
            <li>Hire Us</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="footer_container_Resources">
          <ul>
            <h2>Terms</h2>
            <li>Help</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Icons Section */}
        <div className="footer_container_Social">
          <ul>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
          </ul>
        </div>
      </footer>

      <div className="footer_bottom">
        <p>© 2025 ForkMaggie. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
