import React from "react";
import "./home.styles.scss";
import Results from "../../components/results/results.component";

import Header from "../../components/header/header.component";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="container">
        <Header />
        <Results />
        {/* <Recipe/> */}
      </div>
    </div>
  );
}
