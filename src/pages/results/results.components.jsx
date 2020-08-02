import React from "react";

import Results from "../../components/results/results.component";
import LayoutPage from "../Layout/layout.page";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

const ResultsPage = ({ searchResultsState: results, searchState }) => {
  return !searchState ? (
    <Redirect to="/" />
  ) : (
    <LayoutPage>
      <Results results={results} />
    </LayoutPage>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResultsState: state.results.results,
    searchState: state.search.search,
  };
};

export default connect(mapStateToProps)(ResultsPage);
