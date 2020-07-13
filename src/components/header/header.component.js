import React from "react";
import "./header.styles.scss";
import MainLogo from "../../images/logo.png";

import { ReactComponent as Cart } from "../../images/supermarket.svg";
import { ReactComponent as Heart } from "../../images/heart.svg";
import { ReactComponent as Search } from "../../images/search.svg";

import { setSearch } from "../../redux/reducers/search/search.action";
import { setResults } from "../../redux/reducers/results/results.action";
import { changePage } from "../../redux/reducers/results/results.action.js";

import { connect } from "react-redux";

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
    const { search, results, changePageNum } = this.props;
    changePageNum(1);
    search(this.state.search);
    await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${this.state.search}`
    )
      .then((res) => res.json())
      .then((data) => data.recipes)
      .then((rec) => {
        results(rec);
        this.setState({
          search: "",
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { likesCount } = this.props;
    return (
      <div className="header">
        <div className="logo-box">
          <img src={MainLogo} alt="logo main" className="logo-main" />
        </div>
        <div className="search-box">
          <div className="search-box--input">
            <input
              type="text"
              placeholder="Search for a Recipe"
              className="search-box--input-search"
              value={this.state.search}
              onChange={this.onChange}
            />
          </div>
          <button className="search-box--btn">
            <Search className="search-box--btn-svg" onClick={this.onSearch} />
          </button>
        </div>
        <div className="util-box">
          <div className="util-box--heart">
            <Heart className="util-box--heart--svg" />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (string) => dispatch(setSearch(string)),
    results: (res) => dispatch(setResults(res)),
    changePageNum: (page) => dispatch(changePage(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
