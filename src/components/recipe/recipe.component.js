import React from "react";
import "./recipe.styles.scss";
import formatIngrdient from "./recipe.utils";

import { connect } from "react-redux";
import {
  changeIngredients,
  changeServings,
} from "../../redux/reducers/results/results.action";

import {
  addLiked,
  removeLiked,
} from "../../redux/reducers/likes/likes.actions";

import RecipeHeader from "./header.subComponent.jsx";
import StatsBar from "./statsBar.subComponent";
import RecipeFooter from "./footer.subComponent";
import RecipeDescription from "./description.subComponent";
import RecipeIngredients from "./ingredients.subComponent";
import RecipeMaking from "./making.subComponent";

class Recipe extends React.Component {
  // componentDidMount() {
  //   this.setIngredients();
  // }

  // componentDidUpdate(prevState) {
  //   const {
  //     selectedRecipe: { id },
  //   } = this.props;
  //   if (prevState.selectedRecipe.id !== id) {
  //     this.setIngredients();
  //   }
  // }

  // setIngredients() {
  //   const {
  //     selectedRecipe: {
  //       recipe: { ingredients },
  //     },
  //     changeIngr,
  //   } = this.props;
  //   const fin = new formatIngrdient(ingredients);
  //   let rand = 0;
  //   fin.formatSizes();
  //   this.timeTotal = fin.calcTime();
  //   this.newIngr = fin.ingredients;
  //   this.newIngr = this.newIngr.map((cur) => {
  //     return {
  //       ...cur,
  //       key: ++rand,
  //     };
  //   });
  //   changeIngr(this.newIngr);
  // }

  // handleServingMinus = () => {
  //   const {
  //     changedIngredients: { ingredients },
  //     changedIngredients: { servings },
  //     changeServings,
  //   } = this.props;
  //   const newServings = servings - 1;
  //   if (newServings < 1) return;
  //   const newIngredients = ingredients.map((cur) => {
  //     const newCount = (cur.count * newServings) / servings;
  //     return { ...cur, count: newCount };
  //   });
  //   const newChangedIngredients = {
  //     servings: newServings,
  //     ingredients: newIngredients,
  //   };
  //   changeServings(newChangedIngredients);
  // };

  // handleServingPlus = () => {
  //   const {
  //     changedIngredients: { ingredients },
  //     changedIngredients: { servings },
  //     changeServings,
  //   } = this.props;
  //   const newServings = servings + 1;
  //   const newIngredients = ingredients.map((cur) => {
  //     const newCount = (cur.count * newServings) / servings;
  //     return { ...cur, count: newCount };
  //   });
  //   const newChangedIngredients = {
  //     servings: newServings,
  //     ingredients: newIngredients,
  //   };
  //   changeServings(newChangedIngredients);
  // };

  // handleLike = () => {
  //   const {
  //     selectedRecipe: { recipe },
  //     addLiked,
  //   } = this.props;
  //   const { title, recipe_id, publisher, image } = recipe;
  //   const likedRecipe = {
  //     recipe_id,
  //     title,
  //     publisher,
  //     image,
  //   };
  //   addLiked(likedRecipe);
  // };

  // handleUnlike = () => {
  //   const {
  //     removeLiked,
  //     selectedRecipe: {
  //       recipe: { recipe_id },
  //     },
  //   } = this.props;
  //   removeLiked(recipe_id);
  // };

  render() {
    const {
      selectedRecipe,
      // selectedRecipe: { recipe },
      // changedIngredients: { ingredients: newIngredients },
      // changedIngredients: { servings },
      // allLiked,
    } = this.props;
    const { id, data } = selectedRecipe;
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
    } = data;
    // const {
    //   name,
    //   originalName,
    //   measures: {
    //     us: { amount: quantity, unitShort: units },
    //   },
    // } = extendedIngredients;
    return (
      <div className="recipe-container">
        <div className="recipe">
          <RecipeHeader image={image} title={title} sourceName={sourceName} />
          <StatsBar
            time={readyInMinutes}
            servings={servings}
            popular={veryPopular}
            price={cheap}
            healthy={veryHealthy}
            diet={vegetarian}
          />
          <RecipeDescription summary={summary} />
          <RecipeIngredients ingredients={extendedIngredients} />
          <RecipeMaking analyzedInstructions={analyzedInstructions} />
          <RecipeFooter sourceUrl={sourceUrl} sourceName={sourceName} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedRecipe: state.results.selectedRecipe,
    // changedIngredients: state.results.changedIngredients,
    // allLiked: state.likes.likes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // changeIngr: (ingr) => dispatch(changeIngredients(ingr)),
    // changeServings: (ingrs) => dispatch(changeServings(ingrs)),
    // addLiked: (item) => dispatch(addLiked(item)),
    // removeLiked: (id) => dispatch(removeLiked(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
