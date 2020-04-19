import React, { Component } from "react";
import "./Checkout.scss";
import Chevron from "./chevron.svg";
import CardIcon from "./card-icon.svg";

import CleanCard from "../../../components/card/clean-card/CleanCard.jsx";

export default class Checkout extends Component {
  render() {
    return (
      <div className="checkout">

        <div className="checkout-side">

          {/* <div className="checkout-nav mb-5">
            <button className="btn-chevron-left"><img src={Chevron} alt=""/></button>
            <span>Alterar forma de pagamento</span>
          </div> */}
          <div className="checkout-card">

            <div className="card-invate">
              <img src={CardIcon} alt=""/>
              <p className="ml-3">Adicione um novo cartão de crédito</p>
            </div>
            <div>
              <CleanCard />
            </div>
            
          </div>
        </div>
        <div className="wizard">



          <form>
            
            <div className="form-group">
              <input type="text" placeholder="Número do cartão" className="form-control" />
            </div>

            <div className="form-group">
              <input type="password" placeholder="Nome (igual do cartão)" className="form-control" />
            </div>

            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Validade" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="CCV" />
              </div>
            </div>

            <div className="form-group mt-3">
              <select id="inputState" className="form-control">
                <option>Número de parcelas</option>
                <option>...</option>
              </select>
            </div>

            <button type="submit" className="btn btn-danger float-right">Continuar</button>
          
          </form>
        </div>
      </div>
    );
  }
}
