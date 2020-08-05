import styled from "styled-components";

export const RecipeContainer = styled.div`
  cursor: pointer;
  padding: 1rem;
  width: 100%;
  height: 12rem;
  margin: 0.1rem;
  border-radius: 0.8rem;
  background: ${(props) => props.theme.colorSecondary};
  border: 3px solid ${(props) => props.theme.colorQuternary};

  display: grid;
  grid-template-columns: 15rem 1fr 10rem 5rem;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 15rem 1fr 5rem;
  }
`;

export const DetailText = styled.p`
  text-align: center;
  font-size: ${(props) => props.size || "2.4rem"};
  margin: 0 2rem;
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) => props.color || props.theme.colorPrimary};
  text-transform: capitalize;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover p {
    color: ${(props) => props.theme.colorTeritary};
  }

  @media only screen and (max-width: 1000px) {
    display: ${(props) => props.tabletpdisplay || null};
  }
`;

export const ImageContaier = styled.img`
  height: 100%;
  width: 100%;
`;
