import React from "react";

import { ReactComponent as Cart } from "../../images/recipePage/basket.svg";
import { ReactComponent as Heart } from "../../images/recipePage/heart.svg";
import { ReactComponent as HeartFilled } from "../../images/recipePage/heart-fill.svg";

import { connect } from "react-redux";

import {
  addToLikes,
  removeFromLikes,
} from "../../redux/reducers/likes/likes.actions";

export const getTime = (mins) => {
  if (mins > 60) {
    return {
      hours: Math.floor(Math.abs(mins / 60)),
      minutes: Math.floor((Math.abs(mins / 60) * 60) % 60),
    };
  } else {
    return {
      hours: null,
      minutes: mins,
    };
  }
};

export const Title = ({ title, sourceName }) => {
  return (
    <div className="recipe--title">
      <p className="recipe--title-title">{title}</p>
      {sourceName ? (
        <p className="recipe--title-author">
          By <span>{sourceName}</span>
        </p>
      ) : null}
    </div>
  );
};

const Options = ({
  id,
  currentRecipe,
  allLikes,
  addToLikes,
  removeFromLikes,
}) => {
  return (
    <div className="recipe--options">
      {allLikes[id] ? (
        <button
          className="recipe--options-heart"
          onClick={() => {
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
            addToLikes(currentRecipe);
          }}
        >
          <p>Favorite</p>
          <Heart className="recipe--svg recipe--svg-heart" />
        </button>
      )}

      <button className="recipe--options-cart">
        <p>Add ingredients to basket</p>
        <Cart className="recipe--svg recipe--svg-cart" />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allLikes: state.likes.likes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToLikes: (item) => dispatch(addToLikes(item)),
    removeFromLikes: (item) => dispatch(removeFromLikes(item)),
  };
};

export const ConnectedOptions = connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);
