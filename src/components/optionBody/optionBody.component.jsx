import React from "react";
import { Link } from "react-router-dom";

import { OptionBox, OptionsContainer, Body } from "./optionBody.styles";
import { hamburgerClick } from "../../redux/reducers/search/search.action";

import { withRouter } from "react-router";
import { connect } from "react-redux";

import SearchContainer from "../search/search.component";

class OptionBody extends React.Component {
  componentWillUnmount() {
    this.props.hamburgerClick(false);
  }

  render() {
    let { history, likesCountState, cartCountState } = this.props;
    let options = [
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

    let homeElement = {
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
  }
}

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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OptionBody)
);
