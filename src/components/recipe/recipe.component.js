import React from "react";
import "./recipe.styles.scss";

import { connect } from "react-redux";

import RecipeHeader from "./header.subComponent.jsx";
import StatsBar from "./statsBar.subComponent";
import RecipeFooter from "./footer.subComponent";
import RecipeDescription from "./description.subComponent";
import RecipeIngredients from "./ingredients.subComponent";
import RecipeMaking from "./making.subComponent";

const Recipe = ({ selectedRecipe: { id, data } }) => {
  const {
    readyInMinutes,
    servings,
    sourceUrl,
    sourceName,
    image,
    summary,
    extendedIngredients,
    title,
    veryPopular,
    cheap,
    veryHealthy,
    vegetarian,
    analyzedInstructions,
  } = data;

  return (
    <div className="recipe-container">
      <div className="recipe">
        <RecipeHeader
          image={image}
          title={title}
          sourceName={sourceName}
          id={id}
        />
        <StatsBar
          time={readyInMinutes}
          popular={veryPopular}
          price={cheap}
          healthy={veryHealthy}
          diet={vegetarian}
        />
        <RecipeDescription summary={summary} />
        <RecipeIngredients
          ingredients={extendedIngredients}
          servings={servings}
        />
        {analyzedInstructions && analyzedInstructions.length ? (
          <RecipeMaking analyzedInstructions={analyzedInstructions} />
        ) : null}
        <RecipeFooter sourceUrl={sourceUrl} sourceName={sourceName} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedRecipe: state.results.selectedRecipe,
  };
};

export default connect(mapStateToProps)(Recipe);
