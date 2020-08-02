import React from "react";

import { connect } from "react-redux";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Recipe from "../../components/recipe/recipe.component";
import LoadingSpinner from "../../components/loadingSpinner/spinner.component";

import { Redirect } from "react-router-dom";

const RecipePage = ({
  selectedRecipeState: recipe,
  searchStatusState: status,
  searchState,
}) => {
  return !searchState ? (
    <Redirect to="/" />
  ) : recipe ? (
    <div className="anyPage">
      <div className="container">
        <Header />
        {status ? (
          <LoadingSpinner />
        ) : status === null ? (
          recipe ? (
            <Recipe />
          ) : null
        ) : (
          <h1>Error getting Recipe</h1>
        )}
        <Footer />
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    selectedRecipeState: state.results.selectedRecipe,
    searchStatusState: state.results.searchStatus,
    searchState: state.search.search,
  };
};

export default connect(mapStateToProps)(RecipePage);
