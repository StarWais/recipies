import React, { useState } from "react";
import "./app.scss";
import Header from "../Header";
import SearchResults from "../SearchResults";
import Recipe from "../Recipe";
import Menu from "../Menu";
function App() {
  const [searchState, setSearchState] = useState("");
  const [searchResults, setSearchResults] = useState([{ number: 0 }]);
  const [currentRecepie, setCurrentRecepie] = useState({});
  function showMenuRecipie() {
    if (
      currentRecepie?.aggregateLikes >= 0 &&
      (searchResults.number === 0 || searchResults.number === undefined)
    ) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div
      className="App"
      onClick={(e) => {
        if (e.target.className === "App" && searchResults.number > 0) {
          setSearchResults([{ number: 0 }]);
          setSearchState("");
        }
      }}
    >
      <Header
        setSearchState={setSearchState}
        searchState={searchState}
        setSearchResults={setSearchResults}
      />
      {searchResults.number > 0 && (
        <SearchResults
          searchResults={searchResults}
          setCurrentRecepie={setCurrentRecepie}
          setSearchResults={setSearchResults}
        />
      )}
      {showMenuRecipie() && (
        <>
          <Recipe currentRecepie={currentRecepie} />
          <Menu currentRecepie={currentRecepie} />
        </>
      )}
    </div>
  );
}

export default App;
