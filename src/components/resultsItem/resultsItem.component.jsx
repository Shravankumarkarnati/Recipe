import React from "react";
import "./resultsItem.styles.scss";

import { selectRecipe } from "../../redux/reducers/results/results.action.js";

import { connect } from "react-redux";

const stringShortner = (someString) => {
  if (someString.length > 15) {
    let newString = someString.slice(0, 15) + "...";
    return newString;
  }
  return someString;
};

function ResultItem({ recipe, selectedRecipe }) {
  const { recipe_id, title, image_url, publisher } = recipe;

  const handleClick = (e) => {
    const selected_recipe_id = parseInt(
      e.target.closest(".results-item").dataset.recipeid
    );
    fetch(`https://forkify-api.herokuapp.com/api/get?rId=${selected_recipe_id}`)
      .then((res) => res.json())
      .then((data) => {
        const selected = {
          id: selected_recipe_id,
          recipe: data.recipe,
        };
        selectedRecipe(selected);
      });
  };

  return (
    <div
      className="results-item"
      data-recipeid={`${recipe_id}`}
      onClick={handleClick}
    >
      <p className="results-item--title">{stringShortner(title)}</p>
      <p className="results-item--publisher">{stringShortner(publisher)}</p>
      <div
        className="results-item--image"
        style={{ backgroundImage: `url(${image_url})` }}
      ></div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectedRecipe: (recipe) => dispatch(selectRecipe(recipe)),
  };
};

export default connect(null, mapDispatchToProps)(ResultItem);
