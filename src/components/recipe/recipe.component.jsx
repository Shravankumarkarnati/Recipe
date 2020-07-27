import React from "react";
import "./recipe.styles.scss";

import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

import Ingredients from "../ingredients/ingredients.component";
import Instructions from "../instructions/instructions.component";
import RecipeStats from "./recipe.stats";
import { Title, ConnectedOptions } from "./recipe.utils";

const Recipe = ({ selectedRecipeState: { id, data } }) => {
  const {
    servings,
    sourceName,
    image,
    summary,
    extendedIngredients,
    title,
    analyzedInstructions,
  } = data;

  const currentRecipe = {
    id,
    image,
    title,
    sourceName,
  };

  let history = useHistory();

  return (
    <div className="recipe">
      <button className="recipe--backBtn" onClick={() => history.goBack()}>
        &laquo; Back
      </button>
      <div className="recipe--container">
        <div className="recipe--header">
          <Title title={title} sourceName={sourceName} />
          <ConnectedOptions id={id} currentRecipe={currentRecipe} />
          <div className="recipe--image">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="recipe--body">
          <RecipeStats />
          <div className="recipe--summary">
            <p>{ReactHtmlParser(summary)}</p>
          </div>
          <div className="recipe--ingredients">
            <Ingredients
              ingredients={extendedIngredients}
              servings={servings}
            />
          </div>
          <div className="recipe--instructions">
            <Instructions analyzedInstructions={analyzedInstructions} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedRecipeState: state.results.selectedRecipe,
  };
};

export default connect(mapStateToProps)(Recipe);
