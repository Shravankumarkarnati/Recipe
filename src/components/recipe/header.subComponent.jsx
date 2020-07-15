import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import {
  addLiked,
  removeLiked,
} from "../../redux/reducers/likes/likes.actions";

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

const RecipeHeader = ({
  image,
  title,
  sourceName,
  id,
  allLikes,
  addToLikes,
  removeFromLikes,
}) => {
  const currentRecipe = {
    id,
    image,
    title,
    sourceName,
  };
  return (
    <HeaderStyled image={image}>
      <img src={image} alt={title} />

      <DetailsStyled>
        <TitleStyled> {title} </TitleStyled>

        <SourceNameStyled>{sourceName}</SourceNameStyled>

        <SvgBarStyled>
          <SvgContainerStyled>
            <ToolTipStyled>
              {allLikes[id] ? (
                <HeartFilled
                  fill="#FF0000"
                  onClick={() => removeFromLikes(id)}
                />
              ) : (
                <Heart fill="white" onClick={() => addToLikes(currentRecipe)} />
              )}

              {allLikes[id] ? (
                <p className="tooltiptext">Remove From Likes</p>
              ) : (
                <p className="tooltiptext">Add To Likes</p>
              )}
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

const mapStateToProps = (state) => {
  return {
    allLikes: state.likes.likes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToLikes: (item) => dispatch(addLiked(item)),
    removeFromLikes: (item) => dispatch(removeLiked(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeHeader);
