import React from "react";
import { connect } from "react-redux";

import { getTime } from "./recipe.utils";

import { ReactComponent as Meat } from "../../images/recipePage/meat.svg";
import { ReactComponent as Veg } from "../../images/recipePage/vegetable.svg";
import { ReactComponent as Popularity } from "../../images/recipePage/popular.svg";
import { ReactComponent as Cost } from "../../images/recipePage/money.svg";
import { ReactComponent as Health } from "../../images/recipePage/healthy-food.svg";

const RecipeStats = ({ selectedRecipeState: { data } }) => {
  const {
    readyInMinutes,
    servings,
    sourceUrl,
    veryPopular,
    cheap,
    veryHealthy,
    vegetarian,
    spoonacularScore,
  } = data;

  const { hours, minutes } = getTime(readyInMinutes);

  const statsLeftElements = [
    {
      name: "Yeild",
      value: servings,
      text: "Servings",
    },
    {
      name: "Time",
      value: hours ? `${hours} hr ${minutes} mins` : `${minutes} Minutes`,
      text: "",
    },
    {
      name: "Votes",
      value: parseInt((spoonacularScore * 10) / 10),
      text: "",
    },
  ];

  const statsRightElements = [
    {
      svg: cheap ? (
        <Cost className="recipe--svg recipe--svg-coin" />
      ) : (
        <div>
          <Cost className="recipe--svg recipe--svg-coin" />
          <Cost className="recipe--svg recipe--svg-coin" />
        </div>
      ),
      text: cheap ? "Price : Low" : "Price : High",
    },
    {
      svg: vegetarian ? (
        <Veg className="recipe--svg recipe--svg-diet" />
      ) : (
        <Meat className="recipe--svg recipe--svg-diet" />
      ),
      text: vegetarian ? "Vegetarian" : "Not Vegetarian",
    },
  ];

  if (veryPopular) {
    statsRightElements.unshift({
      svg: <Popularity className="recipe--svg recipe--svg-popular" />,
      text: "Trending",
    });
  }

  if (veryHealthy) {
    statsRightElements.push({
      svg: <Health className="recipe--svg recipe--svg-healthy" />,
      text: "Healthy",
    });
  }

  return (
    <div className="recipe--stats">
      <div className="recipe--stats-details">
        {statsLeftElements.map((cur) => {
          return (
            <p className="text" key={cur.name}>
              <span className="bold">{cur.name}</span>
              <pre> : {cur.value} </pre>
              <span>{cur.text}</span>
            </p>
          );
        })}
      </div>
      <div className="recipe--stats-insights">
        <div className="recipe--stats-insights--top">
          {statsRightElements.map((cur) => {
            return (
              <p className="tooltip-para" key={cur.text}>
                {cur.svg}
                <span className="tooltiptext">{cur.text}</span>
              </p>
            );
          })}
        </div>
        <div className="recipe--stats-insights--bottom">
          <div className="recipe--stats-source">
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
              Recipe Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedRecipeState: state.results.selectedRecipe,
  };
};

export default connect(mapStateToProps)(RecipeStats);
