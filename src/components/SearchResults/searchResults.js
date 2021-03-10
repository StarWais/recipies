import React from "react";
import SearchResult from "../SearchResult";
import { v4 as uuidv4 } from "uuid";
import "./searchResults.scss";

function SearchResults({ searchResults, setCurrentRecepie, setSearchResults }) {
  if (searchResults.number > 0) {
    return (
      <div className="SearchResults">
        <div className="Blur"></div>
        <div className="SearchResults__Wrapper">
          <h3 className="SearchResults__Title">Search Results</h3>
          <div className="SearchResults__ResultsWrapper">
            {searchResults.results.map((result) => (
              <SearchResult
                title={result.title}
                image={searchResults.baseUri + result.image}
                minutes={result.readyInMinutes}
                servings={result.servings}
                key={uuidv4()}
                id={result.id}
                setCurrentRecepie={setCurrentRecepie}
                setSearchResults={setSearchResults}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default SearchResults;
