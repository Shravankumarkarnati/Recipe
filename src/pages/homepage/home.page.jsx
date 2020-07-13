import React from "react";
import "./home.styles.scss";
import Results from "../../components/results/results.component";
import Recipe from "../../components/recipe/recipe.component";
import Header from "../../components/header/header.component";

import { connect } from "react-redux";

const HomePage = ({ selectedRecipe }) => {
  return (
    <div className="homepage">
      <div className="container">
        <Header />
        <Results />
        {selectedRecipe ? <Recipe /> : <div></div>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedRecipe: state.results.selectedRecipe,
  };
};

export default connect(mapStateToProps)(HomePage);
