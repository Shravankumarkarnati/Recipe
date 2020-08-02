import React from "react";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Results from "../../components/results/results.component";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

const ResultsPage = ({ searchResultsState: results, searchState }) => {
  return !searchState ? (
    <Redirect to="/" />
  ) : (
    <div className="resultsPage">
      <Header />
      <Results results={results} />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResultsState: state.results.results,
    searchState: state.search.search,
  };
};

export default connect(mapStateToProps)(ResultsPage);
