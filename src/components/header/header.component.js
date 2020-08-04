import React, { useState } from "react";
import "./header.styles.scss";

import { ReactComponent as Logo } from "../../images/header/healthy-food.svg";

import { createBrowserHistory } from "history";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { hamburgerClick } from "../../redux/reducers/search/search.action";
import { OptionBox } from "../optionBody/optionBody.styles";
import SearchContainer from "../search/search.component";

const Header = ({ likesCountState, cartCountState, hamburgerClick }) => {
  const history = createBrowserHistory();
  const [click, setClick] = useState(false);

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

  const handleClick = () => {
    hamburgerClick(!click);
    setClick(!click);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link className="logo-box" to="/">
          <Logo className="logo" />
          <p className="logoText">Regale</p>
        </Link>
      </div>

      <div className="header-utils">
        {history.location.pathname !== "/" && !click ? (
          <SearchContainer display="flex" bg={false} font="2rem" />
        ) : null}
        {headerElements.map((cur) => (
          <Link
            key={cur.name}
            to={`${cur.link}`}
            style={{ textDecoration: "none", margin: "0 2rem" }}
          >
            <OptionBox>
              {cur.count > 0 ? (
                <span title={cur.count} className="notif"></span>
              ) : null}
              <span className="text">{cur.name}</span>
            </OptionBox>
          </Link>
        ))}
      </div>

      <button
        className={click ? "header-hamburger clicked" : "header-hamburger"}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    likesCountState: state.likes.countLikes,
    cartCountState: state.cart.cartCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hamburgerClick: (flag) => dispatch(hamburgerClick(flag)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
