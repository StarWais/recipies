import React from "react";
import "./recipe.scss";
function Recipe({ currentRecepie }) {
  if (currentRecepie?.aggregateLikes >= 0) {
    return (
      <div className="Recipe">
        <div className="Recipe__Source">{currentRecepie.sourceName}</div>
        <h3 className="Recipe__Title">{currentRecepie.title}</h3>
        <div className="Recipe__Wrapper">
          <img src={currentRecepie.image} alt="" className="Recipe__Image" />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Recipe;
