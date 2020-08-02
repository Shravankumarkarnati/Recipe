import React from "react";

import "./layout.styles.scss";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

const LayoutPage = (props) => {
  return (
    <div className="anyPage">
      <div className="container">
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default LayoutPage;
