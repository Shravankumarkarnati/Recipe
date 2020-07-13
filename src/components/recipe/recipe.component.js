import React from "react";
import "./recipe.styles.scss";
import formatIngrdient from "./recipe.utils";

import { connect } from "react-redux";
import { changeIngredients } from "../../redux/reducers/results/results.action";

import { ReactComponent as Cart } from "../../images/supermarket.svg";
import { ReactComponent as Heart } from "../../images/heart.svg";
import { ReactComponent as Add } from "../../images/add.svg";
import { ReactComponent as Minus } from "../../images/minus.svg";
import { ReactComponent as Timer } from "../../images/timer.svg";

class Recipe extends React.Component {
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

  setIngredients() {
    const {
      selectedRecipe: {
        recipe: { ingredients },
      },
      changeIngr,
    } = this.props;
    const fin = new formatIngrdient(ingredients);
    fin.formatSizes();
    this.timeTotal = fin.calcTime();
    this.newIngr = fin.ingredients;
    changeIngr(this.newIngr);
  }

  render() {
    const {
      selectedRecipe: { recipe },
      changedIngredients,
    } = this.props;
    const { image_url, publisher, publisher_url, source_url, title } = recipe;
    return (
      <div className="recipe-container">
        <div className="recipe">
          <div className="recipe-header">
            <div className="recipe-header--div">
              <img
                className="recipe-header--div-image"
                src={image_url}
                alt={title}
              />
            </div>
            <div className="recipe-header--details">
              <h1 className="recipe-header--details-title"> {title} </h1>
              <p className="recipe-header--details-publisher">
                {" "}
                by : {publisher}
              </p>
            </div>
          </div>
          <div className="recipe-controller">
            <div className="recipe-controller--servings">
              <div className="recipe-controller--servings-text">
                <p>Servings </p>
                <div className="servings-div">
                  <Minus className="servings-minus" fill="blue" />{" "}
                  <span className="servings-count"> 4 </span>{" "}
                  <Add className="servings-plus" fill="blue" />
                </div>
              </div>
            </div>
            <div className="recipe-controller--time">
              <p className="recipe-controller--time-text">
                <Timer className="timerSvg" fill="red" />
                <span className="timeMinutes">{this.timeTotal}</span>
                <span>Minutes</span>
              </p>
            </div>
            <div className="recipe-controller--heart">
              <Heart className="recipe-controller--heart-svg" fill="green" />
            </div>
            <div className="recipe-controller--cart">
              <Cart className="recipe-controller--cart-svg" fill="green" />
            </div>
          </div>
          <div className="recipe-main">
            {changedIngredients
              ? changedIngredients.map((ing) => (
                  <div className="recipe-main--ingredient" key={ing.ingredient}>
                    <span>{`${parseFloat(ing.count).toFixed(2)}`}</span>
                    {"  "}
                    <span>{ing.unit}</span> {"  "}
                    <span>{ing.ingredient}</span>
                  </div>
                ))
              : null}
          </div>
          <div className="recipe-footer">
            <a
              href={publisher_url}
              // target="_blank"
              className="recipe-footer--publisherUrl"
            >
              Goto Author
            </a>
            <a
              href={source_url}
              // target="_blank"
              className="recipe-footer--sourceUrl"
            >
              Goto Recipe
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedRecipe: state.results.selectedRecipe,
    changedIngredients: state.results.changedIngredients,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeIngr: (ingr) => dispatch(changeIngredients(ingr)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
