import React from "react";
import platPic from "../imgs/plate.png";
import "../styles/Home.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KokoreImage from "../imgs/fried-clipart-transparent-background-7.png";
import kissImage from "../imgs/pancake_PNG94.png";

import Menu from "./Menu.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/contact"); // 👈 first navigate
    setTimeout(() => {
      const locationSection = document.getElementById("location");
      if (locationSection) {
        locationSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 500); // 👈 wait till page loads
  };
  return (
    <>
      <section className="section_O1">
        <div className="section_O1_div">
          {/* Left side image with rotation animation */}
          <div
            className="section_01_left"
            data-aos="fade-right" // 👈 rotation from left side
          >
            <img src={platPic} alt="plate" />
          </div>

          {/* Right side text */}
          <div className="section_01_right" data-aos="fade-up">
            <div className="section_01_text_01">
              <h1>
                The Spectical{" "}
                <span>
                  Before Us <br /> Was Indeed
                </span>{" "}
                Sublime
              </h1>
            </div>
            <div className="section_01_text_02">
              <p>
                Apparently, we had reached a great height in the atmosphere, for
                the sky was a dead black, and which lifts the horizon of the sea
                to the level of the spectator on a hillside.
              </p>
            </div>
            <div className="section_01_button">
              <button>ORDER ONLINE</button>
              <button onClick={handleButton}>OUR LOCATION</button>
            </div>
          </div>
        </div>
      </section>
      <section className="section_04">
        <div className="section_04_div_right" data-aos="fade-up">
          <img src={KokoreImage} alt="kokore Image" />
        </div>
        <div className="section_04_div_left" data-aos="fade-left">
          <p>Hungry?</p>
          <h1>We will home deliver !</h1>
          <button>Make An Order</button>
        </div>
      </section>
      <section className="section_05">
        <div className="section_05_text_content" data-aos="fade-right">
          <h3>Catering</h3>
          <h1>We Manage Your Events</h1>
          <p>
            Allow our Chef to deliver the perfect private dinner or cocktail
            party experience in your home; or let us simply add a little extra
            flavor to your next office meeting, boat trip, or beach picnic. By
            partnering with our sibling location Rosewater Wine & Spirits, we
            can offer a full array of bar services and beverage selections.
            Email us to learn more.
          </p>
        </div>

        <div className="section_05_FoodBox">
          <div className="section_05_foodImage" data-aos="zoom-in-down">
            <img src={kissImage} alt="foodImage"></img>
          </div>
          <div className="section_05_foodImage_text" data-aos="fade-up">
            <h4>We Cater in Weddings, Corporate Functions and Events</h4>
            <button>Hire Us Me</button>
          </div>
        </div>
      </section>
      <section className="section_07">
        <div className="section_07_container">
          <div className="section_07_content" data-aos="fade-right">
            <h1>Feel free to drop us a line!</h1>
            <p>
              Let's talk if you have any query or suggestion. We are open to
              learn from you.
              <br />
              So don't hesitate to reach us anytime.
            </p>
          </div>
          <div className="section_07_userGiveExpri" data-aos="zoom-in">
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="section_07_userGiveExpriMass" data-aos="zoom-in">
            <textarea placeholder="Type of Your Message" required></textarea>
            <button type="submit">Give us a Short</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
