import React from "react";
import "./resultsItem.styles.scss";

import { onSelectedRecipe } from "../../redux/reducers/results/results.action.js";

import { connect } from "react-redux";

const stringShortner = (someString) => {
  if (someString.length > 15) {
    let newString = someString.slice(0, 15) + "...";
    return newString;
  }
  return someString;
};

function ResultItem({ recipe, onSelectedRecipe }) {
  const { id, title, image } = recipe;

  const handleClick = (e) => {
    const selected_recipe_id = parseInt(
      e.target.closest(".results-item").dataset.recipeid
    );
    onSelectedRecipe(selected_recipe_id, image, title);
  };

  return (
    <div className="results-item" data-recipeid={`${id}`} onClick={handleClick}>
      <p className="results-item--title">{stringShortner(title)}</p>
      <div
        className="results-item--image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectedRecipe: (id, image, title) =>
      dispatch(onSelectedRecipe(id, image, title)),
  };
};

export default connect(null, mapDispatchToProps)(ResultItem);
