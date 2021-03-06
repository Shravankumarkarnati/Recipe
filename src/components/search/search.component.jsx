import React, { useState } from "react";
import { ReactComponent as SearchSVG } from "../../images/searchBar/search.svg";

import { setSearch } from "../../redux/reducers/search/search.action";
import { onSearchAsync } from "../../redux/reducers/results/results.action";

import { connect } from "react-redux";
import { withRouter } from "react-router";

import { SearchContainerStyled, BtnMain, FormStyled } from "./search.styles";

const SearchContainer = ({
  searchStringDispatch,
  onSearchAsync,
  history,
  bg,
  display,
  font,
  smallwidth,
  smallbtnfont,
  smallInputFont,
}) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = async (e) => {
    e.preventDefault();
    if (search.length > 0) {
      searchStringDispatch(search);
      onSearchAsync(search);
      history.push("/results");
    }
  };

  return (
    <FormStyled onSubmit={onSearch} display={display}>
      <SearchContainerStyled
        bg={bg}
        font={font}
        smallwidth={smallwidth}
        smallInputFont={smallInputFont}
      >
        <SearchSVG />

        <input
          type="text"
          value={search}
          onChange={onChange}
          data-testid="searchContainer"
        />
      </SearchContainerStyled>
      <BtnMain
        type="submit"
        onClick={onSearch}
        font={font}
        smallbtnfont={smallbtnfont}
        data-testid="btnMain"
      >
        Search
      </BtnMain>
    </FormStyled>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchStringDispatch: (string) => dispatch(setSearch(string)),
    onSearchAsync: (query) => dispatch(onSearchAsync(query)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SearchContainer));
