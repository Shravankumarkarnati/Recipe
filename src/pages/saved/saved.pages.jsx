import React from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Results from "../../components/results/results.component";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

const SavedPage = ({ allSaved: results, searchState }) => {
  const newResults = Object.values(results);
  return !searchState ? (
    <Redirect to="/" />
  ) : (
    <div className="resultsPage">
      <Header />
      <Results results={newResults} />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allSaved: state.likes.likes,
    searchState: state.search.search,
  };
};

export default connect(mapStateToProps)(SavedPage);
