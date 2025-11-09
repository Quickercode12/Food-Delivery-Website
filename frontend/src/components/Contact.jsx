import foodpizza from "../imgs/2.jpg";
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import "../styles/contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="section_06">
      <div className="section_06_content_text" data-aos="fade-down">
        <p>Location & Timing</p>
        <h1>Contact With Us</h1>
      </div>

      <div className="section_06_info_box">
        {/* ---------- Address Box ---------- */}
        <div className="section_06_address" data-aos="flip-down">
          <div className="section_06_icon">
            <FaMapMarkerAlt />
          </div>
          <p>Av. Paz Soldán 290, San Isidro, Lima 27 - Peru</p>
          <div className="section_06_icon">
            <FaPhoneAlt />
          </div>
          <p>7877909324</p>
          <div className="section_06_icon">
            <FaEnvelope />
          </div>
          <p>gautamgaur2005@gmail.com</p>
        </div>

        {/* ---------- Hours of Service ---------- */}
        <div className="section_06_address" data-aos="flip-down">
          <div className="section_06_icon">
            <FaClock />
          </div>
          <h5>Hours of Service</h5>
          <p>Monday to Saturday</p>
          <p>1:00 pm - 3:00 pm and</p>
          <p>7:00 pm - 11:00 pm</p>
          <p>Sunday</p>
          <p>12:30 pm - 3:30 pm</p>
        </div>

        {/* ---------- Support Box ---------- */}
        <div
          className="section_06_address section_06_support"
          data-aos="flip-down"
        >
          <img src={foodpizza} alt="Pizza" />
          <h5>Telephone Support:</h5>
          <p>Monday to Saturday from</p>
          <p>9:00 am to 9:00 pm</p>
          <button>Make a Reservation</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
