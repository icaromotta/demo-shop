import React from "react";
import "./CleanCard.scss";

// import visaLogo from "./visa-logo.png";

export default (props) => (
  <div className="clean-card">
    <div className="clean-card-flag">
      {/* <img src={visaLogo} alt="logo-visa" /> */}
    </div>
    <div className="clean-card-data">
      <div className="data-number">
        <span>{props.card.number || '**** **** **** ****'}</span>
      </div>
      <div className="data-group">
        <span>{props.card.name || 'NOME DO TÍTULAR'}</span>
        <span>{props.card.expiration || '00/00'}</span>
      </div>
    </div>
  </div>
);
