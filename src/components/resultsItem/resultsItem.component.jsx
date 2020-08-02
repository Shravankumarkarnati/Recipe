import React from "react";
import "./resultsItem.styles.scss";

import { onSelectedRecipe } from "../../redux/reducers/results/results.action.js";

import { connect } from "react-redux";

import { withRouter } from "react-router";

function ResultItem({ recipe, onSelectedRecipe, history }) {
  const { id, title, image } = recipe;

  const handleClick = (e) => {
    const selected_recipe_id = parseInt(
      e.target.closest(".results-item").dataset.recipeid
    );
    onSelectedRecipe(selected_recipe_id, image, title);
    history.push("/recipe");
  };

  return (
    <div
      className="results-item"
      title={title}
      data-recipeid={`${id}`}
      onClick={handleClick}
    >
      <div
        className="results-item-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="results-item-details">
        <p className="results-item--title">{title}</p>
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

export default withRouter(connect(null, mapDispatchToProps)(ResultItem));
