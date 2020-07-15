import React from "react";
import styled from "styled-components";

const FooterBarStyled = styled.div`
  height: 4rem;
  background-color: black;
  color: white;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-transform: capitalize;

  & a {
    text-decoration: none;
    background: white;
    color: black;
    padding: 1rem 1rem;
    border-radius: 1rem;
  }
`;

const RecipeFooter = ({ sourceUrl, sourceName }) => {
  return (
    <FooterBarStyled>
      <p>By : {sourceName}</p>
      <a href={`${sourceUrl}`} target="_blank" rel="noopener noreferrer">
        Goto Source
      </a>
    </FooterBarStyled>
  );
};

export default RecipeFooter;
