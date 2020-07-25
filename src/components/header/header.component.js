import React from "react";
import "./header.styles.scss";

import { ReactComponent as NewLogo } from "../../images/Regale-2.svg";
import { ReactComponent as Cart } from "../../images/grocery.svg";
import { ReactComponent as Heart } from "../../images/heart-fill.svg";
import { ReactComponent as Home } from "../../images/home.svg";

import { createBrowserHistory } from "history";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {
  history = createBrowserHistory();

  render() {
    const { likesCount } = this.props;
    return (
      <header className="header">
        <div className="header-container">
          <Link className="logo-box" to="/">
            <NewLogo className="logo" />
          </Link>
          <div className="utils-container">
            {this.history.location.pathname !== "/" ? (
              <Link to="/" className="utils-container--home">
                <div className="utils-container--home-svg">
                  <Home className="svg" />
                </div>
                <p>Home</p>
              </Link>
            ) : null}
            <Link to="/saved" className="utils-container--saved">
              <div className="utils-container--saved-svg">
                <Heart className="svg" />
                {likesCount > 0 ? (
                  <span className="notifCount">{likesCount}</span>
                ) : null}
              </div>
              <p>Saved</p>
            </Link>
            <Link to="/cart" className="utils-container--cart">
              <div className="utils-container--cart-svg">
                <Cart className="svg" />
                <span className="notifCount">3</span>
              </div>
              <p>Cart</p>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    likesCountSaved: state.likes.countLikes,
    // cartCountSaved: state.cart.
  };
};

export default connect(mapStateToProps)(Header);
