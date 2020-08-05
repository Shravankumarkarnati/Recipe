import React from "react";
import "./recipe.styles.scss";

import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";

import Ingredients from "../ingredients/ingredients.component";
import Instructions from "../instructions/instructions.component";
import RecipeStats from "./recipe.stats";
import { Title, ConnectedOptions } from "./recipe.utils";
import OptionBody from "../optionBody/optionBody.component";

const Recipe = ({ selectedRecipeState: { id, data }, hamburger }) => {
  const {
    servings,
    sourceName,
    image,
    summary,
    extendedIngredients,
    title,
    analyzedInstructions,
    sourceUrl,
    spoonacularScore,
  } = data;

  const currentRecipe = {
    id,
    image,
    title,
    sourceName,
    score: parseInt((spoonacularScore * 10) / 10),
  };

  return hamburger ? (
    <OptionBody />
  ) : (
    <div className="recipe">
      <div className="recipe--container">
        <ConnectedOptions
          id={id}
          currentRecipe={currentRecipe}
          sourceUrl={sourceUrl}
        />
        <div className="recipe--header">
          <Title title={title} sourceName={sourceName} />
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
    hamburger: state.search.hamburger,
  };
};

export default connect(mapStateToProps)(Recipe);
