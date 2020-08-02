import styled from "styled-components";

export const CartBodyStyled = styled.div`
  grid-column: 1/-1;
  grid-row: 2/3;
  /* max-width: 114rem; */
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: var(--color-primary);
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  width: 100%;
  text-align: center;
  margin: 2rem 0;
  color: var(--color-secondary);
  text-transform: uppercase;
`;

export const ClearBtn = styled.button`
  cursor: pointer;
  align-self: flex-end;
  margin-right: 5rem;
  text-align: center;
  color: var(--color-text);
  padding: 1rem;
  font-size: 1.6rem;
  background-color: var(--color-secondary);
  transition: all 0.2s;
  text-transform: capitalize;
  border-radius: 0.5rem;
  &:focus,
  &:active {
    outline: none;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const Ingredients = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 3rem auto;
`;

export const IngredientContainer = styled.div`
  padding: 1rem;
  width: 100%;
  margin: 0.1rem;
  background: var(--color-teritary);
  border-radius: 0.8rem;

  display: grid;
  grid-template-columns: 12rem 8rem 25rem 1fr 4rem;
  align-items: center;
`;

export const ChangeController = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.input`
  text-align: center;
  border: none;
  font-size: 1.5rem;
  color: var(--color-text);
  background: var(--color-teritary);
  padding: 0.5rem 0;
  margin: 0;
`;

export const ChangeBtn = styled.button`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  text-align: center;
  color: var(--color-primary);
  background-color: var(--color-teritary);
  padding: 0.5rem;
  font-size: 2rem;
  transition: all 0.2s;
  border-radius: 0.2rem;
  text-transform: capitalize;
  &:focus,
  &:active {
    outline: none;
  }
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 2rem;
    fill: ${(props) => props.fillcolor || "var(--color-secondary)"};
  }
`;

export const IngredientText = styled.p`
  font-size: 1.8rem;
  margin: 0 2rem;
  color: var(--color-text);
  text-transform: capitalize;
`;
