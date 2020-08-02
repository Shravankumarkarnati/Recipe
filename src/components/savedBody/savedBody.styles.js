import styled from "styled-components";

export const RecipeContainer = styled.div`
  cursor: pointer;
  padding: 1rem;
  width: 100%;
  height: 12rem;
  margin: 0.1rem;
  border-radius: 0.8rem;
  background: var(--color-grey-light);

  display: grid;
  grid-template-columns: 15rem 1fr 10rem 5rem;
  align-items: center;
`;

export const DetailText = styled.p`
  text-align: center;
  font-size: ${(props) => props.size || "2.4rem"};
  margin: 0 2rem;
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) => props.color || "black"};
  text-transform: capitalize;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover p {
    color: var(--color-orange);
  }
`;

export const ImageContaier = styled.img`
  height: 100%;
  width: 100%;
`;
