import React from "react";
import "./spinner.styles.scss";

import { ReactComponent as Circle } from "../../images/circle.svg";
import { ReactComponent as Search } from "../../images/search.svg";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinners-svg-container">
        <Circle className="circle spinner-svg" />
        <Search className="search spinner-svg" />
      </div>
    </div>
  );
};

export default Spinner;
