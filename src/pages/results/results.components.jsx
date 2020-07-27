import React from "react";
import "./results.styles.scss";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Results from "../../components/results/results.component";

const ResultsPage = ({ resultsState }) => {
  return (
    <div className="resultsPage">
      <Header />
      <Results />
      <Footer />
    </div>
  );
};

export default ResultsPage;
