import React from "react";
import "./header.styles.scss";
import MainLogo from "../../images/logo.png";

import { ReactComponent as Cart } from "../../images/supermarket.svg";
import { ReactComponent as Heart } from "../../images/heart.svg";

import { setSearch } from "../../redux/reducers/search/search.action";
import { onSearchAsync } from "../../redux/reducers/results/results.action";
import {
  setLikesToResults,
  removeLikesFromResults,
} from "../../redux/reducers/likes/likes.actions";

import { connect } from "react-redux";
import SearchField from "../searchField/searchField.component";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  onChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  onSearch = async (e) => {
    const { search, onSearchAsync } = this.props;
    search(this.state.search);
    onSearchAsync(this.state.search);
  };

  handleHeartClick = () => {
    const {
      likesCount,
      setLikes,
      removeLikes,
      likes,
      likesResult,
    } = this.props;

    if (likesCount) {
      Object.keys(likesResult).length > 0 ? removeLikes() : setLikes(likes);
    }
  };

  render() {
    const { likesCount } = this.props;
    return (
      <div className="header">
        <div className="logo-box">
          <img src={MainLogo} alt="logo main" className="logo-main" />
        </div>
        <SearchField
          onClick={this.onSearch}
          handleValue={this.state.search}
          handleValueChange={this.onChange}
        />
        <div className="util-box">
          <div className="util-box--heart">
            <Heart
              className="util-box--heart--svg"
              onClick={this.handleHeartClick}
            />
            {likesCount ? (
              <p className="util-box--heart--text">{likesCount}</p>
            ) : null}
          </div>
          <div className="util-box--cart">
            <Cart className="util-box--cart-svg" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    likesCount: state.likes.countLikes,
    likes: state.likes.likes,
    likesResult: state.likes.likesResult,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (string) => dispatch(setSearch(string)),
    setLikes: (payload) => dispatch(setLikesToResults(payload)),
    removeLikes: () => dispatch(removeLikesFromResults()),
    onSearchAsync: (query) => dispatch(onSearchAsync(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
