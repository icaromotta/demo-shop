import React from "react";
import Step1 from "./step-1.png";
import Step2 from "./step-2.png";
import Step3 from "./step-3.png";
import Arrow from "./arrow.png";
import Checked from "./checked.png";
import "../wizard/Wizard.scss";

export default (props) => (
  <div className="wizard mb-3">
    <ul>
      <li>
        <img src={Checked} alt="" /> Carrinho
      </li>
      <li>
        <img src={Arrow} alt="" />
      </li>
      <li>
        <img src={Step2} alt="" />
        Pagamento
      </li>
      <li>
        <img src={Arrow} alt="" />
      </li>
      <li>
        <img src={Step3} alt="" /> Confirmação
      </li>
    </ul>
  </div>
);
