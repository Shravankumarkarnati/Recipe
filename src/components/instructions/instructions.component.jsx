import React from "react";
import "./instructions.styles.scss";

const Instructions = ({ analyzedInstructions: instructions }) => {
  const allSteps = {};
  instructions.forEach((cur) => {
    const curSteps = cur["steps"];
    curSteps.forEach((steps) => {
      const { number, step } = steps;
      allSteps[number] = step;
    });
  });
  const sortedKeys = Object.keys(allSteps)
    .map((cur) => parseInt(cur))
    .sort(function (a, b) {
      return a - b;
    });
  return !sortedKeys.length ? null : (
    <div>
      <h1 className="recipe--instructions-heading recipe-subheading">
        Preparation
      </h1>
      <div className="recipe--instructions-container">
        {sortedKeys.map((key) => {
          return (
            <p className="recipe--instructions-instruction" key={key}>
              <span className="number">{key}</span>
              {allSteps[key]}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Instructions;
