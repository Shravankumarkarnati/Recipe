import React from "react";
import styled from "styled-components";

import { HeadingStyled } from "./ingredients.subComponent";

const StepsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 5rem;
`;

const StepStyled = styled.p`
  color: black;
  font-size: 2.2rem;
  margin: 2rem 0;

  .number {
    font-size: 2.5rem;
    font-weight: 700;
    margin-right: 1rem;
  }
`;

const RecipeMaking = ({ analyzedInstructions: instructions }) => {
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
  return (
    <div>
      <HeadingStyled> Recipe Making Steps</HeadingStyled>
      <StepsContainerStyled>
        {sortedKeys.map((key) => {
          return (
            <StepStyled key={key}>
              <span className="number">{key}</span>
              {allSteps[key]}
            </StepStyled>
          );
        })}
      </StepsContainerStyled>
    </div>
  );
};

export default RecipeMaking;
