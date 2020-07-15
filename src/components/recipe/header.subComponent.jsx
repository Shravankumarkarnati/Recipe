import React from "react";
import styled from "styled-components";

import {
  BarStyled,
  SvgContainerStyled,
  ToolTipStyled,
} from "./statsBar.subComponent";

import { ReactComponent as Cart } from "../../images/supermarket.svg";
import { ReactComponent as Heart } from "../../images/heart.svg";
import { ReactComponent as HeartFilled } from "../../images/heart-fill.svg";

const HeaderStyled = styled.div`
  height: 25vh;
  margin: auto;
  padding: 0 3rem;
  background: black;
  background: white;
  overflow: hidden;
  display: flex;
  align-items: center;

  & > img {
    width: 35%;
  }
`;

const TitleStyled = styled.p`
  font-size: 4rem;
  letter-spacing: 0.3rem;
`;

const SourceNameStyled = styled.p`
  font-size: 2rem;
`;

const DetailsStyled = styled.div`
  flex-grow: 1;
  background: black;
  color: white;
  padding: 5rem;
  text-align: center;

  display: flex;
  flex-direction: column;
`;

const SvgBarStyled = styled(BarStyled)`
  height: 5rem;
  background-color: black;
`;

const RecipeHeader = ({ image, title, sourceName }) => {
  return (
    <HeaderStyled image={image}>
      <img src={image} alt={title} />

      <DetailsStyled>
        <TitleStyled> {title} </TitleStyled>

        <SourceNameStyled>{sourceName}</SourceNameStyled>

        <SvgBarStyled>
          <SvgContainerStyled>
            <ToolTipStyled>
              <HeartFilled fill="#FF0000" />
              <Heart fill="white" />
              <p className="tooltiptext">Add to Likes</p>
            </ToolTipStyled>
          </SvgContainerStyled>

          <SvgContainerStyled>
            <ToolTipStyled>
              <Cart fill="white" />
              <p className="tooltiptext">Add to Cart</p>
            </ToolTipStyled>
          </SvgContainerStyled>
        </SvgBarStyled>
      </DetailsStyled>
    </HeaderStyled>
  );
};

export default RecipeHeader;
