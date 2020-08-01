import React from "react";
import "./header.styles.scss";

import { ReactComponent as NewLogo } from "../../images/header/logoMain.svg";
import { ReactComponent as Cart } from "../../images/header/basket.svg";
import { ReactComponent as Heart } from "../../images/header/heart-fill.svg";
import { ReactComponent as Home } from "../../images/header/home.svg";

import { createBrowserHistory } from "history";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ likesCountState, cartCountState }) => {
  const history = createBrowserHistory();

  const headerElements = [
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

  if (history.location.pathname !== "/") {
    headerElements.unshift(homeElement);
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link className="logo-box" to="/">
          <NewLogo className="logo" />
        </Link>
        <div className="utils-container">
          {headerElements.map((cur) => (
            <Link
              key={cur.name}
              to={`${cur.link}`}
              className={`utils-container--${cur.name}`}
            >
              <div className={`utils-container--${cur.name}-svg`}>
                {cur.name === "basket" ? (
                  <Cart className="svg" />
                ) : cur.name === "saved" ? (
                  <Heart className="svg" />
                ) : cur.name === "home" ? (
                  <Home className="svg" />
                ) : null}
                {ReactHtmlParser(cur.icon)}
                {cur.count > 0 ? (
                  <span className="notifCount">{cur.count}</span>
                ) : null}
                <p>{cur.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    likesCountState: state.likes.countLikes,
    cartCountState: state.cart.cartCount,
  };
};

export default connect(mapStateToProps)(Header);
