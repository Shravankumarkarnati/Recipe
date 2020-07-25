import React from "react";
import "./results.styles.scss";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Results from "../../components/results/results.component";

import { connect } from "react-redux";

const ResultsPage = ({ resultsState }) => {
  return (
    <div className="resultsPage">
      <Header />
      <Results results={resultsState} />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    resultsState: state.results.results,
  };
};

export default connect(mapStateToProps)(ResultsPage);
