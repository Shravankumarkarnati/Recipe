import React, { useState } from "react";
import "./resultsItem.styles.scss";

import { onSelectedRecipe } from "../../redux/reducers/results/results.action.js";

import { connect } from "react-redux";

import { Redirect } from "react-router";

const stringShortner = (someString) => {
  if (someString.length > 25) {
    let newString = someString.slice(0, 25) + "...";
    return newString;
  }
  return someString;
};

function ResultItem({ recipe, onSelectedRecipe }) {
  const [redirect, setRedirect] = useState(false);
  const { id, title, image } = recipe;

  const handleClick = (e) => {
    const selected_recipe_id = parseInt(
      e.target.closest(".results-item").dataset.recipeid
    );
    onSelectedRecipe(selected_recipe_id, image, title);
    setRedirect(true);
  };

  return redirect ? (
    <Redirect push to="/recipe" />
  ) : (
    <div className="results-item" data-recipeid={`${id}`} onClick={handleClick}>
      <div
        className="results-item-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="results-item-details">
        <p className="results-item--title">{stringShortner(title)}</p>
      </div>
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
