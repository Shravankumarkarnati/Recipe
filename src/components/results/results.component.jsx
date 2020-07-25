import React, { useState, useEffect } from "react";
import ResultItem from "../resultsItem/resultsItem.component";
import "./results.styles.scss";

import { ReactComponent as Triangle } from "../../images/triangle.svg";

import { connect } from "react-redux";

const Results = ({ results }) => {
  const [pageNum, changePageNum] = useState(1);
  const resultsPerPage = 9;

  const handlePageChange = (e) => {
    const page = parseInt(e.target.dataset.page);
    changePageNum(page);
  };

  useEffect(() => {
    changePageNum(1);
  }, []);

  let start = (pageNum - 1) * resultsPerPage;
  let end = pageNum * resultsPerPage;

  if (results) {
    end = end <= results.length ? end : results.length;

    const curResults = results.slice(start, end);
    return (
      <div className="body-results">
        <button
          className="btn btn-left"
          title="Previous Page"
          data-page={`${pageNum - 1}`}
          onClick={handlePageChange}
          style={results[start - 1] ? null : { visibility: "hidden" }}
        >
          <Triangle className="svg" />
        </button>

        <div className="results-container">
          {curResults.map((recipe) => (
            <ResultItem key={recipe.id} recipe={recipe} />
          ))}
        </div>

        <button
          title="Next Page"
          className="btn btn-right"
          data-page={`${pageNum + 1}`}
          onClick={handlePageChange}
          style={results[end + 1] ? null : { visibility: "hidden" }}
        >
          <Triangle className="svg" />
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default connect()(Results);
