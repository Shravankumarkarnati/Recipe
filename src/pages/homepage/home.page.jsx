import React from "react";

import Header from "../../components/header/header.component";
import Body from "../../components/body/body.component";
import Footer from "../../components/footer/footer.component";

const HomePage = () => {
  return (
    <div className="anyPage">
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
