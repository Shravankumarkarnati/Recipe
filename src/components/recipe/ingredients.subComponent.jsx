import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import { changeIngredients } from "../../redux/reducers/results/results.action";

const IngredientsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem 5rem;
`;

export const HeadingStyled = styled.h1`
  font-size: 3.3rem;
  text-align: center;
  text-transform: uppercase;
`;

const SingleIngredientStyled = styled.div`
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    font-size: 2rem;
    margin: 1rem;
  }
`;

class RecipeIngredients extends React.Component {
  componentDidMount() {
    this.setIngredients();
  }

  componentDidUpdate(prevState) {
    const {
      selectedRecipe: { id },
    } = this.props;
    if (prevState.selectedRecipe.id !== id) {
      this.setIngredients();
    }
  }

  setIngredients = () => {
    const { ingredients, changeIngredientsDispatch, servings } = this.props;
    const structuredIngredients = [];
    for (let i = 0; i < ingredients.length; i++) {
      const {
        name,
        originalString,
        measures: {
          us: { amount, unitShort: units },
        },
      } = ingredients[i];

      structuredIngredients[i] = {
        key: i,
        name,
        originalString,
        amount,
        units,
      };
    }
    changeIngredientsDispatch({
      ingredients: structuredIngredients,
      servings,
    });
  };

  render() {
    const {
      changedIngredientsState: { ingredients },
    } = this.props;

    return (
      <div>
        <HeadingStyled>Ingredients</HeadingStyled>
        <IngredientsStyled>
          {ingredients
            ? ingredients.map((cur) => {
                return (
                  <SingleIngredientStyled key={cur.key}>
                    <p>{cur.amount}</p>
                    <p>{cur.units}</p>
                    <p>{cur.name}</p>
                  </SingleIngredientStyled>
                );
              })
            : null}
        </IngredientsStyled>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedRecipe: state.results.selectedRecipe,
    changedIngredientsState: state.results.changedIngredients,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeIngredientsDispatch: (ingredients) =>
      dispatch(changeIngredients(ingredients)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIngredients);
