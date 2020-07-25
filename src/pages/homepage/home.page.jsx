import React from "react";
import "./home.styles.scss";

import Header from "../../components/header/header.component";
import Body from "../../components/body/body.component";
import Footer from "../../components/footer/footer.component";

import { connect } from "react-redux";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default connect()(HomePage);
