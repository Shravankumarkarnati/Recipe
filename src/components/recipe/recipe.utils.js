import React from "react";

import { ReactComponent as Cart } from "../../images/recipePage/basket.svg";
import { ReactComponent as Heart } from "../../images/recipePage/heart.svg";
import { ReactComponent as HeartFilled } from "../../images/recipePage/heart-fill.svg";
import { ReactComponent as Print } from "../../images/recipePage/printer.svg";
import { ReactComponent as Link } from "../../images/recipePage/link.svg";

import { connect } from "react-redux";

import { Floater, BtnStyled, LinkStyled } from "./recipe.styled";

import {
  addToLikes,
  removeFromLikes,
} from "../../redux/reducers/likes/likes.actions";

import {
  addToCart,
  removeFromCart,
} from "../../redux/reducers/cart/cart.actions";

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

const RecipeFloater = ({
  id,
  currentRecipe,
  sourceUrl,
  ingredients,
  allLikes,
  addToLikes,
  removeFromLikes,
  allCartRecipes,
  addToCart,
  removeFromCart,
}) => {
  return (
    <Floater>
      {allLikes[id] ? (
        <BtnStyled
          title="Unsave"
          inputColor="red"
          onClick={() => {
            removeFromLikes(id);
          }}
        >
          <HeartFilled />
        </BtnStyled>
      ) : (
        <BtnStyled
          title="Save"
          onClick={() => {
            addToLikes(currentRecipe);
          }}
        >
          <Heart />
        </BtnStyled>
      )}
      {allCartRecipes[id] ? (
        <BtnStyled
          title="Remove ingredients from basket"
          inputColor="red"
          onClick={() => {
            removeFromCart(id, ingredients);
          }}
        >
          <Cart />
        </BtnStyled>
      ) : (
        <BtnStyled
          title="Add ingredients to basket"
          onClick={() => {
            addToCart(id, ingredients);
          }}
        >
          <Cart />
        </BtnStyled>
      )}
      <BtnStyled title="Print Recipe" onClick={() => window.print()}>
        <Print />
      </BtnStyled>
      <LinkStyled
        title="Source Link"
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Link />
      </LinkStyled>
    </Floater>
  );
};

const mapStateToProps = (state) => {
  return {
    allLikes: state.likes.likes,
    ingredients: state.results.changedIngredients,
    allCartRecipes: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToLikes: (item) => dispatch(addToLikes(item)),
    removeFromLikes: (item) => dispatch(removeFromLikes(item)),
    addToCart: (id, items) => dispatch(addToCart(id, items)),
    removeFromCart: (id, items) => dispatch(removeFromCart(id, items)),
  };
};

export const ConnectedOptions = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeFloater);
