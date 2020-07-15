import React from "react";
import styled from "styled-components";

import { ReactComponent as Add } from "../../images/add.svg";
import { ReactComponent as Minus } from "../../images/minus.svg";
import { ReactComponent as Timer } from "../../images/timer.svg";
import { ReactComponent as Meat } from "../../images/meat.svg";
import { ReactComponent as Veg } from "../../images/vegetable.svg";
import { ReactComponent as Popularity } from "../../images/popular.svg";
import { ReactComponent as People } from "../../images/fast-food.svg";
import { ReactComponent as Cost } from "../../images/money.svg";
import { ReactComponent as Health } from "../../images/healthy-food.svg";

export const BarStyled = styled.div`
  height: 7rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SvgContainerStyled = styled.div`
  display: flex;
  & svg {
    height: 3rem;
    width: 2.5rem;
  }
`;

export const TextStyled = styled.p`
  font-size: 2rem;
  margin: 0 2rem;
`;

export const ToolTipStyled = styled.div`
  position: relative;
  display: inline-block;

  .tooltiptext {
    visibility: hidden;
    width: 12rem;
    background-color: white;
    color: black;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -6rem;
  }

  .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }

  &:hover .tooltiptext {
    visibility: visible;
  }
`;

const StatsBar = ({ time, servings, popular, price, healthy, diet }) => {
  return (
    <BarStyled>
      <SvgContainerStyled>
        <ToolTipStyled>
          <People />
          <p className="tooltiptext">Servings</p>
        </ToolTipStyled>
        <TextStyled>{servings}</TextStyled>
        <Minus fill="#e3bf4d" data-servings="-1" />
        <Add fill="#ea3b15" data-servings="1" />
      </SvgContainerStyled>

      <SvgContainerStyled>
        <ToolTipStyled>
          <Timer fill="#596273" />
          <p className="tooltiptext">Time To Cook</p>
        </ToolTipStyled>
        <TextStyled>{`${time} Minutes`}</TextStyled>
      </SvgContainerStyled>

      {popular ? (
        <SvgContainerStyled>
          <ToolTipStyled>
            <Popularity />
            <p className="tooltiptext">Trending</p>
          </ToolTipStyled>
        </SvgContainerStyled>
      ) : null}

      {price ? (
        <SvgContainerStyled>
          <ToolTipStyled>
            <Cost fill="#FFDF00" />
            <Cost fill="#FFDF00" />
            <p className="tooltiptext">Expensive</p>
          </ToolTipStyled>
        </SvgContainerStyled>
      ) : (
        <SvgContainerStyled>
          <ToolTipStyled>
            <Cost fill="#FFDF00" />
            <p className="tooltiptext">Affordable</p>
          </ToolTipStyled>
        </SvgContainerStyled>
      )}
      {healthy ? (
        <SvgContainerStyled>
          <ToolTipStyled>
            <Health />
            <p className="tooltiptext">Healthy</p>
          </ToolTipStyled>
        </SvgContainerStyled>
      ) : null}

      <SvgContainerStyled>
        {diet ? (
          <ToolTipStyled>
            <Veg />
            <p className="tooltiptext">Vegetarian</p>
          </ToolTipStyled>
        ) : (
          <ToolTipStyled>
            <Meat />
            <p className="tooltiptext">Not Vegetarian</p>
          </ToolTipStyled>
        )}
      </SvgContainerStyled>
    </BarStyled>
  );
};

export default StatsBar;
