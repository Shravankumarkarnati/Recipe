import React from "react";
import "./results.styles.scss";
import ResultItem from "../resultsItem/resultsItem.component";

import { changePage } from "../../redux/reducers/results/results.action.js";

import { connect } from "react-redux";

const Results = ({ recipes, curPage, changePageNum }) => {
  const handlePageChange = (e) => {
    const page = parseInt(e.target.dataset.page);
    changePageNum(page);
  };

  if (recipes !== null) {
    const elementsPerPage = 8;
    let start = (curPage - 1) * elementsPerPage;
    let end = curPage * elementsPerPage;

    end = end <= recipes.length ? end : recipes.length;

    const curRecipes = recipes.slice(start, end);
    return (
      <div className="results-container">
        <div className="results">
          {curRecipes.map((recipe) => (
            <ResultItem key={recipe.recipe_id} recipe={recipe} />
          ))}
        </div>
        <div className="results-btns">
          <div className="results-btn--prev">
            {recipes[start - 1] ? (
              <button data-page={`${curPage - 1}`} onClick={handlePageChange}>
                &larr; Prev
              </button>
            ) : null}
          </div>
          <div className="results-btn--next">
            {recipes[end + 1] ? (
              <button data-page={`${curPage + 1}`} onClick={handlePageChange}>
                &rarr; Next
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="results-container"></div>;
  }
};

const mapStateToProps = (state) => {
  return {
    recipes: state.results.results,
    curPage: state.results.pageNum,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePageNum: (pageNum) => dispatch(changePage(pageNum)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
