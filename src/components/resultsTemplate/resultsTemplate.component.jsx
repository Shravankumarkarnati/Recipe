import React, { useState, useEffect } from "react";
import ResultItem from "../resultsItem/resultsItem.component";
import "./results.styles.scss";

const ResultsTemplate = ({ results }) => {
  const [pageNum, changePageNum] = useState(1);
  const resultsPerPage = 8;

  const handlePageChange = (e) => {
    const page = parseInt(e.target.dataset.page);
    changePageNum(page);
  };

  useEffect(() => {
    changePageNum(1);
  }, []);

  if (results !== null) {
    let start = (pageNum - 1) * resultsPerPage;
    let end = pageNum * resultsPerPage;

    end = end <= results.length ? end : results.length;

    const curResults = results.slice(start, end);
    return (
      <div className="results-container">
        <div className="results">
          {curResults.map((recipe) => (
            <ResultItem key={recipe.id} recipe={recipe} />
          ))}
        </div>
        <div className="results-btns">
          <div className="results-btn--prev">
            {results[start - 1] ? (
              <button data-page={`${pageNum - 1}`} onClick={handlePageChange}>
                &larr; Prev
              </button>
            ) : null}
          </div>
          <div className="results-btn--next">
            {results[end + 1] ? (
              <button data-page={`${pageNum + 1}`} onClick={handlePageChange}>
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

export default ResultsTemplate;
