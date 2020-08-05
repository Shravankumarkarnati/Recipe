import React from "react";
import { connect } from "react-redux";
import { onSelectedRecipe } from "../../redux/reducers/results/results.action.js";
import { ReactComponent as Cross } from "../../images/cartPage/cross-circle.svg";
import { setSearch } from "../../redux/reducers/search/search.action";
import {
  removeFromLikes,
  deleteAllLikes,
} from "../../redux/reducers/likes/likes.actions";
import { withRouter } from "react-router-dom";
import OptionBody from "../optionBody/optionBody.component";

import {
  CartBodyStyled,
  Title,
  ClearBtn,
  Ingredients,
  ChangeBtn,
} from "../cartBody/cartBody.styles";

import {
  ImageContaier,
  RecipeContainer,
  DetailsContainer,
  DetailText,
} from "./savedBody.styles";

const SavedBody = ({
  allSavedState,
  savedCount,
  onSelectedRecipe,
  history,
  setSearchDispatch,
  deleteRecipe,
  clearAllRecipes,
  hamburger,
}) => {
  const handleClick = (id, image, title) => {
    setSearchDispatch(title);
    onSelectedRecipe(id, image, title);
    history.push("/recipe");
  };

  const handleClearSaved = () => {
    const sure = window.confirm(
      "Clear All Saved Recipes? \nYou can't undo this action!"
    );
    if (sure) clearAllRecipes();
  };

  return hamburger ? (
    <OptionBody />
  ) : !savedCount ? (
    <CartBodyStyled>
      <Title>Saved Recipes</Title>
      <DetailText weight="700" size="3rem" color="var(--color-text)">
        No recipes Saved!
      </DetailText>
    </CartBodyStyled>
  ) : (
    <CartBodyStyled>
      <Title>Saved Recipes</Title>
      <ClearBtn onClick={handleClearSaved}>Clear All Saved Recipes</ClearBtn>
      <Ingredients>
        {Object.values(allSavedState).map((cur) => (
          <RecipeContainer key={cur.id}>
            <ImageContaier
              src={cur.image}
              alt={cur.title}
              onClick={() => handleClick(cur.id, cur.image, cur.title)}
            />
            <DetailsContainer
              onClick={() => handleClick(cur.id, cur.image, cur.title)}
            >
              <DetailText weight="700">{cur.title}</DetailText>
              <DetailText size="1.4rem" color="var(--color-secondary)">
                {cur.sourceName}
              </DetailText>
            </DetailsContainer>
            <DetailsContainer tabletpdisplay="none">
              <DetailText weight="700">{cur.score}</DetailText>
              <DetailText size="1.4rem" color="var(--color-secondary)">
                Score
              </DetailText>
            </DetailsContainer>
            <ChangeBtn
              fillcolor="red"
              title="Delete Recipe"
              onClick={() => deleteRecipe(cur.id)}
            >
              <Cross />
            </ChangeBtn>
          </RecipeContainer>
        ))}
      </Ingredients>
    </CartBodyStyled>
  );
};

const mapStateToProps = (state) => {
  return {
    allSavedState: state.likes.likes,
    savedCount: state.likes.countLikes,
    hamburger: state.search.hamburger,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectedRecipe: (id, image, title) =>
      dispatch(onSelectedRecipe(id, image, title)),
    setSearchDispatch: (string) => dispatch(setSearch(string)),
    deleteRecipe: (id) => dispatch(removeFromLikes(id)),
    clearAllRecipes: () => dispatch(deleteAllLikes()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SavedBody)
);
