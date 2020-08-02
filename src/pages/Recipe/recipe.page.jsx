import React from "react";

import { connect } from "react-redux";

import Recipe from "../../components/recipe/recipe.component";
import LoadingSpinner from "../../components/loadingSpinner/spinner.component";

import LayoutPage from "../Layout/layout.page";

import { Redirect } from "react-router-dom";

const RecipePage = ({
  selectedRecipeState: recipe,
  searchStatusState: status,
  searchState,
}) => {
  return !searchState ? (
    <Redirect to="/" />
  ) : recipe ? (
    <LayoutPage>
      {status ? (
        <LoadingSpinner />
      ) : status === null ? (
        recipe ? (
          <Recipe />
        ) : null
      ) : (
        <h1>Error getting Recipe</h1>
      )}
    </LayoutPage>
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
