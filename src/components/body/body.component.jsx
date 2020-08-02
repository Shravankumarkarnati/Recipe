import React, { useState } from "react";
import "./body.styles.scss";

import { ReactComponent as SearchSVG } from "../../images/searchBar/search.svg";

import { setSearch } from "../../redux/reducers/search/search.action";
import { onSearchAsync } from "../../redux/reducers/results/results.action";

import { connect } from "react-redux";
import { withRouter } from "react-router";

const Body = ({ searchStringDispatch, onSearchAsync, history }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = async (e) => {
    e.preventDefault();
    searchStringDispatch(search);
    onSearchAsync(search);
    history.push("/results");
  };

  return (
    <div className="body">
      <div className="body-main">
        <p className="body-main--heading">
          <span>Find </span>
          <span>a </span>
          <span>Recipe</span>
        </p>
        <form onSubmit={onSearch}>
          <div className="body-main--search">
            <SearchSVG className="search-button-svg" />
            <input type="text" value={search} onChange={onChange} />
          </div>
          <div className="body-main--button">
            <button
              type="submit"
              className="body-main--button-btn"
              onClick={onSearch}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchStringDispatch: (string) => dispatch(setSearch(string)),
    onSearchAsync: (query) => dispatch(onSearchAsync(query)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Body));
