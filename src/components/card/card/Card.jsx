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
        <span>5149</span>
        <span>4505</span>
        <span>6231</span>
        <span>6542</span>
      </div>
      <div className="data-group">
        <span>FELIPE B A PIO NT</span>
        <span>06/26</span>
      </div>
    </div>
  </div>
);
