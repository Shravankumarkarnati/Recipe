import React from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import SavedBody from "../../components/savedBody/savedBody.component";

import { connect } from "react-redux";

const SavedPage = ({ searchState }) => {
  return (
    <div>
      <Header />
      <SavedBody />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchState: state.search.search,
  };
};

export default connect(mapStateToProps)(SavedPage);
