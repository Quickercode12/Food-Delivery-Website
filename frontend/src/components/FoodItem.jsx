import React from "react";

function FoodItem({ Food_Name, price, content }) {
 
  return (
    <div className="Food_Box" data-aos="flip-up">
      <h1>
        {Food_Name} <span>{price}</span>
      </h1>
      <div className="Food_Box_Content">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default FoodItem;
