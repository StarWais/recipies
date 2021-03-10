import React from "react";
import "./menuIngredient.scss";

function MenuIngredient({ name, amount, unit }) {
  return (
    <li className="MenuIngredient">
      {name}{" "}
      <span>
        {amount} {unit}
      </span>
    </li>
  );
}

export default MenuIngredient;
