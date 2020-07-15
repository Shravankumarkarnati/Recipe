import React from "react";
import { ReactComponent as Search } from "../../images/search.svg";
import "./searchField.styles.scss";

const SearchField = ({ onClick, handleValue, handleValueChange }) => {
  return (
    <div className="App">
      <div className="search-container">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search for a Recipe"
            className="search-input--input"
            value={handleValue}
            onChange={handleValueChange}
          />
        </div>
        <div className="search-button">
          <Search className="search-button-svg" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default SearchField;
