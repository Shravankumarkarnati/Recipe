import React from "react";
import { Link } from "react-router-dom";

import { OptionBox, OptionsContainer, Body } from "./optionBody.styles";

import { withRouter } from "react-router";
import { connect } from "react-redux";

import SearchContainer from "../search/search.component";

const OptionBody = ({ history, likesCountState, cartCountState }) => {
  const options = [
    {
      name: "saved",
      count: likesCountState,
      link: "/saved",
    },
    {
      name: "basket",
      count: cartCountState,
      link: "/basket",
    },
  ];

  const homeElement = {
    name: "home",
    link: "/",
  };
  let search = false;

  if (history.location.pathname !== "/") {
    options.unshift(homeElement);
    search = true;
  }

  return (
    <Body>
      <OptionsContainer>
        {search ? <SearchContainer bg={false} /> : null}
        {options.map((cur) => (
          <Link
            key={cur.name}
            to={`${cur.link}`}
            style={{ textDecoration: "none" }}
          >
            <OptionBox>
              {cur.count > 0 ? (
                <span title={cur.count} className="notif"></span>
              ) : null}
              <span className="text">{cur.name}</span>
            </OptionBox>
          </Link>
        ))}
      </OptionsContainer>
    </Body>
  );
};

const mapStateToProps = (state) => {
  return {
    likesCountState: state.likes.countLikes,
    cartCountState: state.cart.cartCount,
  };
};

export default withRouter(connect(mapStateToProps)(OptionBody));
