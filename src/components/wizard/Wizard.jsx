import React from "react";
import Step2 from "./step-2.png";
import Step3 from "./step-3.png";
import Arrow from "./arrow.png";
import Checked from "./checked.png";
import "../wizard/Wizard.scss";

export default (props) => (
  <div className="wizard mb-3">
    <ul>
      <li>
        <img src={Checked} className="mr-2" alt="" /> Carrinho
      </li>
      <li>
        <img src={Arrow} className="mr-2" alt="" />
      </li>
      <li>
        <img src={Step2} className="mr-2" alt="" />
        Pagamento
      </li>
      <li>
        <img src={Arrow} alt="" />
      </li>
      <li>
        <img src={Step3} className="mr-2" alt="" /> Confirmação
      </li>
    </ul>
  </div>
);
