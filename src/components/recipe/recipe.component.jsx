import React from "react";
import "./recipe.styles.scss";

import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Ingredients from "../ingredients/ingredients.component";
import Instructions from "../instructions/instructions.component";

import ReactHtmlParser from "react-html-parser";
import { ReactComponent as Cart } from "../../images/supermarket.svg";
import { ReactComponent as Heart } from "../../images/heart.svg";
import { ReactComponent as HeartFilled } from "../../images/heart-fill.svg";

import { ReactComponent as Meat } from "../../images/meat.svg";
import { ReactComponent as Veg } from "../../images/vegetable.svg";
import { ReactComponent as Popularity } from "../../images/popular.svg";
import { ReactComponent as Cost } from "../../images/money.svg";
import { ReactComponent as Health } from "../../images/healthy-food.svg";
import { ReactComponent as Spoon } from "../../images/spoon.svg";

import {
  addLiked,
  removeLiked,
} from "../../redux/reducers/likes/likes.actions";

const Recipe = ({
  selectedRecipeState: { id, data },
  allLikes,
  addToLikes,
  removeFromLikes,
}) => {
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
    spoonacularScore,
  } = data;
  const currentRecipe = {
    id,
    image,
    title,
    sourceName,
  };
  let times = {};
  if (readyInMinutes > 60) {
    times = {
      hours: Math.floor(Math.abs(readyInMinutes / 60)),
      minutes: Math.floor((Math.abs(readyInMinutes / 60) * 60) % 60),
    };
  } else {
    times = {
      hours: null,
      minutes: readyInMinutes,
    };
  }
  let history = useHistory();

  return (
    <div className="recipe">
      <button className="recipe--backBtn" onClick={() => history.goBack()}>
        &laquo; Back
      </button>
      <div className="recipe--header">
        <div className="recipe--title">
          <p className="recipe--title-title">{title}</p>
          {sourceName ? (
            <p className="recipe--title-author">
              By <span>{sourceName}</span>
            </p>
          ) : null}
        </div>
        <div className="recipe--options">
          {allLikes[id] ? (
            <button
              className="recipe--options-heart"
              onClick={() => {
                console.log("remove");
                removeFromLikes(id);
              }}
            >
              <p>Unfavorite</p>
              <HeartFilled className="recipe--svg recipe--svg-heartFilled" />
            </button>
          ) : (
            <button
              className="recipe--options-heart"
              onClick={() => {
                console.log("add");
                addToLikes(currentRecipe);
              }}
            >
              <p>Favorite</p>
              <Heart className="recipe--svg recipe--svg-heart" />
            </button>
          )}

          <button className="recipe--options-cart">
            <p>Add ingredients to cart</p>
            <Cart className="recipe--svg recipe--svg-cart" />
          </button>
        </div>
        <div className="recipe--image">
          <img src={image} alt={title} />
        </div>
      </div>
      <div className="recipe--body">
        <div className="recipe--stats">
          <div className="recipe--stats-details">
            <p className="text">
              Yeild : <span className="bold">{servings} Servings</span>{" "}
            </p>
            <p className="text">
              Time :
              <span className="bold">
                {times.hours
                  ? `${times.hours} hr ${times.minutes} mins`
                  : `${times.minutes} Minutes`}
              </span>
            </p>
            <p className="text">
              Votes :{" "}
              <span className="bold">
                {parseInt((spoonacularScore * 10) / 10)}
                <Spoon className="recipe--svg recipe--svg-spoon" />
              </span>
            </p>
          </div>
          <div className="recipe--stats-insights">
            {veryPopular ? (
              <p className="tooltip-para">
                <Popularity className="recipe--svg recipe--svg-popular" />
                <span className="tooltiptext">Trending</span>
              </p>
            ) : null}
            <p className="tooltip-para">
              <Cost className="recipe--svg recipe--svg-coin" />
              {cheap ? null : <Cost className="recipe--svg recipe--svg-coin" />}
              <span className="tooltiptext">
                {cheap ? "Price : Low" : "Price : High"}
              </span>
            </p>
            {veryHealthy ? (
              <p className="tooltip-para">
                <Health className="recipe--svg recipe--svg-healthy" />
                <span className="tooltiptext">Healthy</span>
              </p>
            ) : null}
            <p className="tooltip-para">
              {vegetarian ? (
                <Veg className="recipe--svg recipe--svg-diet" />
              ) : (
                <Meat className="recipe--svg recipe--svg-diet" />
              )}
              {vegetarian ? (
                <span className="tooltiptext">Vegetarian</span>
              ) : (
                <span className="tooltiptext">Not Vegetarian</span>
              )}
            </p>
          </div>
          <div className="recipe--stats-source">
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
              Recipe Source
            </a>
          </div>
        </div>

        <div className="recipe--summary">
          <p>{ReactHtmlParser(summary)}</p>
        </div>
        <div className="recipe--ingredients">
          <Ingredients ingredients={extendedIngredients} servings={servings} />
        </div>
        <div className="recipe--instructions">
          <Instructions analyzedInstructions={analyzedInstructions} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedRecipeState: state.results.selectedRecipe,
    allLikes: state.likes.likes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToLikes: (item) => dispatch(addLiked(item)),
    removeFromLikes: (item) => dispatch(removeLiked(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
