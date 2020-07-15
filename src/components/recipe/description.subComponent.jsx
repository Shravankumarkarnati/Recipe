import React from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

const DescriptionStyled = styled.div`
  color: black;
  font-size: 2rem;
  padding: 3rem 5rem;
`;

const RecipeDescription = ({ summary }) => {
  return <DescriptionStyled>{ReactHtmlParser(summary)} </DescriptionStyled>;
};

export default RecipeDescription;
