import styled from "styled-components";

export const CartBodyStyled = styled.div`
  grid-column: 1/-1;
  grid-row: 2/3;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colorSecondary};
  border-top: 2px solid ${(props) => props.theme.colorPrimary};
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  width: 100%;
  text-align: center;
  margin: 2rem 0;
  color: ${(props) => props.theme.colorPrimary};
  text-transform: uppercase;
`;

export const ClearBtn = styled.button`
  cursor: pointer;
  align-self: flex-end;
  margin-right: 5rem;
  text-align: center;
  color: ${(props) => props.theme.colorSecondary};
  padding: 1rem;
  font-size: 1.6rem;
  background-color: ${(props) => props.theme.colorTeritary};
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
  background: ${(props) => props.theme.colorSecondary};
  border-radius: 0.8rem;
  border: 3px solid ${(props) => props.theme.colorQuternary};

  display: grid;
  grid-template-columns: 20rem 10rem 1fr 5rem;
  grid-template-rows: 1fr min-content;
  grid-row-gap: 1rem;
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
  color: ${(props) => props.theme.colorSecondary};
  background: ${(props) => props.theme.colorTeritary};
  padding: 0.5rem 0;
  margin: 0;
  border-radius: 0.5rem;
`;

export const ChangeBtn = styled.button`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  text-align: center;
  background-color: ${(props) =>
    props.bgblue ? props.theme.colorQuaternary : props.theme.colorSecondary};
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
    fill: ${(props) => props.fillcolor || props.theme.colorPrimary};
  }
`;

export const IngredientText = styled.p`
  font-size: 1.8rem;
  margin: 0 2rem;
  color: var(--color-text);
  text-transform: capitalize;
  text-align: center;

  grid-row: ${(props) => (props.gridtabletfix ? "2/-1" : null)};
  grid-column: ${(props) => (props.gridtabletfix ? "1/-1" : null)};
  border-top: ${(props) => (props.gridtabletfix ? `1px solid #13A0B1` : null)};
`;
