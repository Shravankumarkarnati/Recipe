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

  & a,
  & span {
    text-decoration: none;
    background: white;
    color: black;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

const printDiv = () => {
  console.log("printer not working :( ");
};

const RecipeFooter = ({ sourceUrl, sourceName }) => {
  return (
    <FooterBarStyled>
      <p>By : {sourceName}</p>
      <a href={`${sourceUrl}`} target="_blank" rel="noopener noreferrer">
        Goto Source
      </a>
      <span onClick={printDiv}>Print Recipe</span>
    </FooterBarStyled>
  );
};

export default RecipeFooter;
