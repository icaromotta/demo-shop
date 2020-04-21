import React from "react";
import "./Card.scss";

import visaLogo from "./visa-logo.png";

export default (props) => (
  <div className="card">
    <div className="card-flag">
      <img src={visaLogo} alt="logo-visa" />
    </div>
    <div className="card-data">
      <div className="data-number">
        <span>{props.card.number}</span>
      </div>
      <div className="data-group">
        <span>{props.card.name}</span>
        <span>{props.card.expiration}</span>
      </div>
    </div>
  </div>
);
