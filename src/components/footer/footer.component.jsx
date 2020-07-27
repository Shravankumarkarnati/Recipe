import React from "react";
import "./footer.styles.scss";

import SpoonLogo from "../../images/Footer/spoonacular-logo-b.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="api">
        <p className="api-p">
          API by{" "}
          <a
            className="spoonacular"
            href="https://spoonacular.com/food-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spoonacular
          </a>
          <span className="api-image">
            <img src={SpoonLogo} alt="spoonacular" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
