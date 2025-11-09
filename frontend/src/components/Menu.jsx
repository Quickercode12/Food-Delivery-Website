import React from "react";
import foodOne from "../imgs/antioxidant-beverage-carrot-juice.png";
import foodTwo from "../imgs/bigimg.jpg";
import foodThree from "../imgs/bowl-calcium-cereal.png";
import foodFour from "../imgs/bowl-delicious-dinner.png";
import foodFive from "../imgs/bread-bun-chopping-board.png";
import foodSix from "../imgs/sec.jpg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Menu.css";
const foods = [
  {
    id: 1,
    name: "Food Item 1",
    imgSrc: foodOne,
  },
  {
    id: 2,
    name: "Food Item 2",
    imgSrc: foodTwo,
  },
  {
    id: 3,
    name: "Food Item 3",
    imgSrc: foodThree,
  },
  {
    id: 4,
    name: "Food Item 4",
    imgSrc: foodFour,
  },
  {
    id: 5,
    name: "Food Item 5",
    imgSrc: foodFive,
  },
  {
    id: 6,
    name: "Food Item 6",
    imgSrc: foodSix,
  },
];

function Menu() {
  return (
    <section className="section_02">
      <div className="section_02_div">
        <div
          className="section_02_text"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <p>OUR MENU</p>
          <br />
          <h1>Taste Our Foods & Enjoy</h1>
        </div>
        <div className="section_02_slider" data-aos="zoom-in">
          <Slider
            dots={true} // small navigation dots
            infinite={true} // loop
            speed={800} // animation speed
            slidesToShow={3} // number of visible images
            slidesToScroll={1} // move one at a time
            autoplay={true} // automatic sliding
            autoplaySpeed={2500} // 2.5 sec per slide
            pauseOnHover={true} // stops when hovered
            arrows={true} // next/prev arrows
            responsive={[
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {foods.map((food, index) => (
              <div className="section_02_slider_item" key={index}>
                <img src={food.imgSrc} alt={food.name} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Menu;
