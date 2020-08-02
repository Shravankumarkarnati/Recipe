import React from "react";
import "./header.styles.scss";

import { ReactComponent as Logo } from "../../images/header/logo.svg";
import { ReactComponent as Cart } from "../../images/header/basket.svg";
import { ReactComponent as Heart } from "../../images/header/heart-fill.svg";
import { ReactComponent as Home } from "../../images/header/home.svg";

import { createBrowserHistory } from "history";
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
      <div className="header-logo">
        <Link className="logo-box" to="/">
          <Logo className="logo" />
        </Link>
      </div>

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
              {cur.count > 0 ? (
                <span title={cur.count} className="notifCount"></span>
              ) : null}
              <p>{cur.name}</p>
            </div>
          </Link>
        ))}
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
