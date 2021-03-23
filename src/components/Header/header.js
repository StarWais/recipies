import React from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {
  headerLogoAnim,
  headerInputAnim,
  headerSearchAnim,
  headerAnim,
} from "./headerAnim";
import { motion } from "framer-motion";
function Header({ setSearchState, searchState, setSearchResults }) {
  const searchHandler = () => {
    const options = {
      method: "GET",
      url:
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
      params: {
        query: searchState,
        number: "5",
        offset: "0",
        type: "main course",
      },
      headers: {
        "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => {
        setSearchResults(response.data);
        setSearchState("");
      })
      .catch((error) => {
        setSearchResults([{ number: 0 }]);
        setSearchState("");
        console.error(error);
      });
  };
  return (
    <motion.div
      variants={headerAnim}
      initial="hidden"
      animate="show"
      className="Header"
    >
      <motion.div variants={headerLogoAnim} className="HeaderLogo">
        <div className="HeaderLogo__Image">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <h2 className="HeaderLogo__Text">Recepies.</h2>
      </motion.div>
      <motion.input
        type="text"
        variants={headerInputAnim}
        placeholder="Search recepies"
        className="Header__Input"
        value={searchState}
        onChange={(e) => {
          setSearchState(e.target.value);
        }}
      />
      <motion.div variants={headerSearchAnim}>
        <FontAwesomeIcon
          icon={faSearch}
          className="Header__Search"
          onClick={searchHandler}
        ></FontAwesomeIcon>
      </motion.div>
    </motion.div>
  );
}

export default Header;
