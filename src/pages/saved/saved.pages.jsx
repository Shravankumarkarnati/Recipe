import React from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import SavedBody from "../../components/savedBody/savedBody.component";

import { connect } from "react-redux";

const SavedPage = ({ searchState }) => {
  return (
    <div className="anyPage">
      <div className="container">
        <Header />
        <SavedBody />
        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchState: state.search.search,
  };
};

export default connect(mapStateToProps)(SavedPage);
