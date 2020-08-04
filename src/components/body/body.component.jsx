import React from "react";
import "./body.styles.scss";

import OptionBody from "../optionBody/optionBody.component";

import { connect } from "react-redux";

import SearchContainer from "../search/search.component";

const Body = ({ hamburger }) => {
  return hamburger ? (
    <OptionBody />
  ) : (
    <div className="body">
      <div className="body-main">
        <p className="body-main--heading">
          <span>Find </span>
          <span>a </span>
          <span>Recipe</span>
        </p>
        <SearchContainer bg={true} font="3rem" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hamburger: state.search.hamburger,
  };
};

export default connect(mapStateToProps)(Body);
