import React, { useState } from "react";
import Gallery from "./gallery";
import "../../App.css";

function SearchBar() {
  const [searchText, setSearchState] = useState("");
  const [triggerApi, setTriggerApi] = useState();
  const searchHandler = () => {
    setTriggerApi(searchText);
  };

  return (
    <div>
      <div className="search">
        <input
          className="searchBar"
          placeholder="Search Images here"
          onChange={(e) => {
            setSearchState(e.target.value);
          }}
        />
        <button onClick={searchHandler} className="searchBtn">
          Search
        </button>
      </div>
      <div>
        <Gallery searchText={triggerApi} />
      </div>
    </div>
  );
}

export default SearchBar;
