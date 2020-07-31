import React from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Results from "../../components/results/results.component";

import { connect } from "react-redux";

const SavedPage = ({ allSaved: results }) => {
  const newResults = Object.values(results);
  return (
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
  };
};

export default connect(mapStateToProps)(SavedPage);
