import React, { useState } from "react";
import "./body.styles.scss";
import { ReactComponent as SearchSVG } from "../../images/search.svg";

import { connect } from "react-redux";
import { setSearch } from "../../redux/reducers/search/search.action";
import { onSearchAsync } from "../../redux/reducers/results/results.action";

import { withRouter } from "react-router";

const Body = ({ searchDispatch, onSearchAsync, history }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = async (e) => {
    e.preventDefault();
    searchDispatch(search);
    onSearchAsync(search);
    history.push("/results");
  };

  return (
    <div className="body">
      <div className="body-main">
        <p className="body-main--heading">Find a Recipe</p>
        <form onSubmit={onSearch}>
          <div className="body-main--search">
            <SearchSVG className="search-button-svg" />
            <input type="text" value={search} onChange={onChange} />
          </div>
          <button
            type="submit"
            className="body-main--button"
            onClick={onSearch}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchDispatch: (string) => dispatch(setSearch(string)),
    onSearchAsync: (query) => dispatch(onSearchAsync(query)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Body));
