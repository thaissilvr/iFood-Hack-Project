import React from "react";
import "./foodCard.css";

function FoodCard({ id, cuisine, ingredients }) {
  return (
    <>
     
      <div className="foodCard">
        <ul>
          <li>
            <span>id:</span> {id}
          </li>
          <li>
            <span>cuisine:</span> {cuisine}
          </li>
          <li>
            <span>ingredients:</span> {ingredients}
          </li>
        </ul>
      </div>
    </>
  );
}

export default FoodCard;
