import React from "react";
import FoodItem from "./FoodItem";
import "../styles/about.css";
import {
  FaCoffee,
  FaUtensils,
  FaDrumstickBite,
  FaBirthdayCake,
  FaGlassMartiniAlt,
} from "react-icons/fa";

const foodItem = [
  {
    id: 1,
    Food_Name: "Delicious Food Item 1",
    price: "$12.99",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    Food_Name: "Delicious Food Item 2",
    price: "$15.99",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    Food_Name: "Delicious Food Item 3",
    price: "$9.99",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    Food_Name: "Delicious Food Item 4",
    price: "$11.99",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 5,
    Food_Name: "Delicious Food Item 5",
    price: "$14.99",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 6,
    Food_Name: "Delicious Food Item 6",
    price: "$13.99",
    content: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
  },
  {
    id: 7,
    Food_Name: "Delicious Food Item 7",
    price: "$10.99",
    content:
      "Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 8,
    Food_Name: "Delicious Food Item 8",
    price: "$16.99",
    content:
      "Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.",
  },
  {
    id: 9,

    Food_Name: "Delicious Food Item 9",
    price: "$8.99",
    content:
      "Phasellus eu tellus sit amet tortor gravida placerat. Integer sapien est, iaculis in, pretium quis, viverra ac, nunc.",
  },
  {
    id: 10,
    Food_Name: "Delicious Food Item 10",
    price: "$17.99",
    content:
      "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
  },
  {
    id: 11,
    Food_Name: "Delicious Food Item 11",
    price: "$18.99",
    content:
      "Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.",
  },
];

function About() {
  return (
    <section className="section_03">
      <div className="section_03_text" data-aos="fade-up">
        <h1>About</h1>
      </div>

      {/* 🔹 Top Icons */}
      <div className="section_03_icon">
        <div className="section_03icon_first">
          <FaCoffee />
          <p data-aos="fade-right">Breakfast</p>
        </div>
        <div className="section_03icon_second">
          <FaUtensils />
          <p data-aos="fade-right">Lunch</p>
        </div>
        <div className="section_03icon_third">
          <FaDrumstickBite />
          <p data-aos="fade-right">Dinner</p>
        </div>
        <div className="section_03icon_fourth">
          <FaBirthdayCake />
          <p data-aos="fade-right">Desserts</p>
        </div>
        <div className="section_03icon_fifth">
          <FaGlassMartiniAlt />
          <p data-aos="fade-right">Drinks</p>
        </div>
      </div>

      {/* 🔹 Main Food Content */}
      <div className="section_03_AllfoodItem" data-aos="flip-up">
        <div className="section_03_food">
          {foodItem.map((item) => (
            <FoodItem
              key={item.id}
              Food_Name={item.Food_Name}
              price={item.price}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
