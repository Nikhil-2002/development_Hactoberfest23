import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./searchbar.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Searchbar = ({ setSearchQuery }) => {
  const navigate = useNavigate();
  const submitSearch = (event) => {
    event.preventDefault();
    setSearchQuery(event.target[0].value);
    navigate("/?s=" + event.target[0].value);
  };

  return (
    <div className="search-container">
      <form onSubmit={(e) => submitSearch(e)}>
        <div className="search-bar-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search for products"
            name="s"
          />
          <button className="search-button">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default Searchbar;
