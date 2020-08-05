import React, { useState, useEffect } from "react";
import "./results.styles.scss";

import ResultItem from "../resultsItem/resultsItem.component";
import LoadingSpinner from "../loadingSpinner/spinner.component";
import OptionBody from "../optionBody/optionBody.component";

import { ReactComponent as LeftArr } from "../../images/resultsNav/chevron-left.svg";
import { ReactComponent as RightArr } from "../../images/resultsNav/chevron-right.svg";

import { connect } from "react-redux";

const Results = ({ results, searchStatusState: status, hamburger }) => {
  const [pageNum, changePageNum] = useState(1);
  let resultsPerPage = window.innerWidth < 1030 ? 10 : 9;

  const handlePageChange = (e) => {
    const page = parseInt(e.target.closest("button").dataset.page);
    changePageNum(page);
  };

  useEffect(() => {
    changePageNum(1);
  }, []);

  let start = (pageNum - 1) * resultsPerPage;
  let end = pageNum * resultsPerPage;

  if (hamburger) {
    return <OptionBody />;
  } else {
    if (status) {
      return <LoadingSpinner />;
    } else if (status === null) {
      if (results) {
        end = end <= results.length ? end : results.length;

        const curResults = results.slice(start, end);
        return (
          <div className="body-results">
            <div className="results-container">
              {curResults.map((recipe) => (
                <ResultItem key={recipe.id} recipe={recipe} />
              ))}
            </div>
            <div className="results-navBtns">
              <button
                className={
                  results[start - 1] ? "btnContainer active" : "btnContainer "
                }
                title="Previous Page"
                data-page={`${pageNum - 1}`}
                onClick={(e) => {
                  if (results[start - 1]) handlePageChange(e);
                }}
              >
                <LeftArr />
                <span className="text">Prev</span>
              </button>
              <button
                className={
                  results[end + 1] ? "btnContainer active" : "btnContainer "
                }
                title="Next Page"
                data-page={`${pageNum + 1}`}
                onClick={(e) => {
                  if (results[end + 1]) handlePageChange(e);
                }}
              >
                <span className="text">Next</span>
                <RightArr />
              </button>
            </div>
          </div>
        );
      }
    } else {
      //error message
      return <div>Error getting Search</div>;
    }
  }
};

const mapStateToProps = (state) => {
  return {
    searchStatusState: state.results.searchStatus,
    hamburger: state.search.hamburger,
  };
};

export default connect(mapStateToProps)(Results);
