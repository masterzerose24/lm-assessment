import React from "react";
import "./app.css";

const SearchBar = props => {
  const { action } = props;

  return (
    <div className="search-container">
      <div className="ui icon input visible">
        <i className="search icon"></i>
        <input
          type="text"
          placeholder="Search"
          onChange={e => action(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
