import React from "react";
import "./home.styles.scss";
import ResultsTemplate from "../../components/resultsTemplate/resultsTemplate.component";
import Recipe from "../../components/recipe/recipe.component";
import Header from "../../components/header/header.component";

import { connect } from "react-redux";

const HomePage = ({ selectedRecipe, recipes, likesResult }) => {
  return (
    <div className="homepage">
      <div className="container">
        <Header />
        {Object.keys(likesResult).length > 0 ? (
          <ResultsTemplate results={Object.values(likesResult)} />
        ) : (
          <ResultsTemplate results={recipes} />
        )}
        {selectedRecipe ? <Recipe /> : <div></div>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedRecipe: state.results.selectedRecipe,
    recipes: state.results.results,
    likesResult: state.likes.likesResult,
  };
};

export default connect(mapStateToProps)(HomePage);
