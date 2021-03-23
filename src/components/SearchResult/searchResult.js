import React from "react";
import "./searchResult.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function SearchResult({
  title,
  image,
  minutes,
  servings,
  id,
  setCurrentRecepie,
  setSearchResults,
}) {
  const recipieHandler = () => {
    const options = {
      method: "GET",
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
      headers: {
        "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setCurrentRecepie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setSearchResults([{ number: 0 }]);
  };
  return (
    <div className="SearchResult" onClick={recipieHandler}>
      <img src={image} alt="" className="SearchResult__Image" />
      <div className="SearchResult__Wrapper">
        <h4 className="SearchResult__Title">{title}</h4>
        <div className="SearchResult__Minutes">
          <FontAwesomeIcon icon={faClock} /> {minutes} min.
        </div>
        <div className="SearchResult__Servings">
          <FontAwesomeIcon icon={faUtensilSpoon} /> {servings} servings.
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
