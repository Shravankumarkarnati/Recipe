import React from "react";
import "./recipe.styles.scss";

import { connect } from "react-redux";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Recipe from "../../components/recipe/recipe.component";
import LoadingSpinner from "../../components/loadingSpinner/spinner.component";

const RecipePage = ({
  selectedRecipeState: recipe,
  searchStatusState: status,
}) => {
  return recipe ? (
    <div className="recipePage">
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
  };
};

export default connect(mapStateToProps)(RecipePage);
