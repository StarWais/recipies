import React from "react";
import "./menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faUtensilSpoon, faHeart } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import MenuIngredient from "../MenuIngredient";
function Menu({ currentRecepie }) {
  if (currentRecepie?.aggregateLikes >= 0) {
    return (
      <div className="Menu">
        <div className="Menu__WrapperTop">
          <div className="Menu__Minutes">
            <FontAwesomeIcon icon={faClock} /> {currentRecepie.readyInMinutes}{" "}
            minutes.
          </div>
          <div className="Menu__Health">
            <FontAwesomeIcon icon={faHeart} /> {currentRecepie.healthScore}{" "}
            health points.
          </div>
        </div>
        <div className="Menu__IngredientsText">Ingredients</div>
        <div className="Menu__ServesText">
          Serves: <span>{currentRecepie.servings}</span>
        </div>
        <ol className="Menu__Ingredients">
          {currentRecepie.extendedIngredients.map((rec) => (
            <MenuIngredient
              key={uuidv4()}
              name={rec.name}
              amount={rec.amount}
              unit={rec.unit}
            />
          ))}
        </ol>
      </div>
    );
  } else {
    return null;
  }
}

export default Menu;
