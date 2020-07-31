import React from "react";
import "./ingredients.styles.scss";

import { connect } from "react-redux";

import { changeIngredients } from "../../redux/reducers/results/results.action";

import { ReactComponent as Add } from "../../images/add.svg";
import { ReactComponent as Minus } from "../../images/minus.svg";
import { ReactComponent as Cart } from "../../images/recipePage/basket.svg";

class Ingredients extends React.Component {
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

  handleServingChange = (changedIngredients, flag) => {
    const { servings, ingredients } = changedIngredients;
    const servingsOffset = flag ? 1 : -1;
    let newServings;
    if (servings + servingsOffset < 1) {
      newServings = servings;
    } else {
      newServings = servings + servingsOffset;
    }
    const newIngredients = ingredients.map((cur) => {
      let newAmount = (cur.amount * newServings) / servings;
      newAmount = Math.round((newAmount + Number.EPSILON) * 10) / 10;
      return { ...cur, amount: newAmount };
    });

    const newChangedIngredients = {
      servings: newServings,
      ingredients: newIngredients,
    };

    return newChangedIngredients;
  };

  render() {
    const { changedIngredientsState, changeIngredientsDispatch } = this.props;
    const { ingredients, servings } = changedIngredientsState;
    return (
      <div>
        <h1 className="recipe--ingredients-heading recipe-subheading">
          Ingredients
        </h1>
        <div className="recipe--ingredients-servings">
          <div className="recipe--ingredients-servings--controller">
            <p>Servings</p>
            <Minus
              onClick={() => {
                const flag = false;
                changeIngredientsDispatch(
                  this.handleServingChange(changedIngredientsState, flag)
                );
              }}
            />
            <Add
              onClick={() => {
                const flag = true;
                changeIngredientsDispatch(
                  this.handleServingChange(changedIngredientsState, flag)
                );
              }}
            />
          </div>
          <p>{servings}</p>
        </div>
        <ul className="recipe--ingredients-container">
          {ingredients
            ? ingredients.map((cur) => {
                return (
                  <li className="recipe--ingredients-ingredient" key={cur.key}>
                    <span className="recipe--ingredients-ingredient--quantity">
                      {cur.amount}
                    </span>
                    <span className="recipe--ingredients-ingredient--unit">
                      {cur.units}
                    </span>
                    <span className="recipe--ingredients-ingredient--name">
                      {cur.name}
                    </span>
                  </li>
                );
              })
            : null}
        </ul>
        <button className="recipe--ingredients-addToBasket">
          <p>Add ingredients to basket</p>
          <Cart className="recipe--svg recipe--svg-cart" />
        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
