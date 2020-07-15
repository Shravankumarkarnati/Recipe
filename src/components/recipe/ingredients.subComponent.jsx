import React from "react";
import styled from "styled-components";

const newIngrdients = (ingredients) => {
  const retIngre = [];
  for (let i = 0; i < ingredients.length; i++) {
    const {
      name,
      originalString,
      measures: {
        us: { amount, unitShort: units },
      },
    } = ingredients[i];

    retIngre[i] = { key: i, name, originalString, amount, units };
  }

  return retIngre;
};

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

const RecipeIngredients = ({ ingredients }) => {
  const structuredIngredients = newIngrdients(ingredients);
  return (
    <div>
      <HeadingStyled>Ingredients</HeadingStyled>
      <IngredientsStyled>
        {structuredIngredients.map((cur) => {
          return (
            <SingleIngredientStyled key={cur.key}>
              <p>{cur.amount}</p>
              <p>{cur.units}</p>
              <p>{cur.name}</p>
            </SingleIngredientStyled>
          );
        })}
      </IngredientsStyled>
    </div>
  );
};

export default RecipeIngredients;
