import React from "react";
import "./recipe.styles.scss";

import { connect } from "react-redux";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Recipe from "../../components/recipe/recipe.component";

const RecipePage = ({ selectedRecipeState }) => {
  return selectedRecipeState ? (
    <div className="recipePage">
      <div className="container">
        <Header />
        <Recipe />
        <Footer />
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    selectedRecipeState: state.results.selectedRecipe,
  };
};

export default connect(mapStateToProps)(RecipePage);
