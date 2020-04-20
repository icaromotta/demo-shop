import React, { Component } from "react";
import "./Checkout.scss";
// import Chevron from "./chevron.svg";
import CardIcon from "./card-icon.svg";

import CleanCard from "../../../components/card/clean-card/CleanCard.jsx";

const cardNumberRegex = RegExp(/^4\d{12}(\d{3})?$/)

const formValid = (formErrors) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      name: "",
      code: "",
      expiration: "",
      timesPaymant: "",
      formErrors: {
        number: "",
        name: "",
        code: "",
        expiration: "",
        timesPaymant: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`
        -- SUBMMITING --
        Number: ${this.state.number}
        Name: ${this.state.name}
        Code: ${this.state.code}
        Expiration: ${this.state.expiration}
        Times Paymant: ${this.state.timesPaymant}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR");
    }
  };

  handleChange = (e) => {

    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "number":
        formErrors.number = cardNumberRegex.test() ? "card number invalid" : "";
        break;
      case "name":
        formErrors.name = value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "code":
        formErrors.name =
          value.length < 6 && value.length > 0
            ? "minimum 3 characters required"
            : "";
        break;
      case "expiration":
        formErrors.name =
          value.length < 6 && value.length > 0
            ? "minimum 3 characters required"
            : "";
        break;
      case "timesPaymant":
        formErrors.name =
          value.length < 6 && value.length > 0
            ? "minimum 3 characters required"
            : "";
        break;
      default:
        break;
    }

    this.setState({formErrors, [name]: value})
  };

  render() {

    const {formErrors} = this.state

    return (
      <div className="checkout">
        <div className="checkout-side">
          {/* <div className="checkout-nav mb-5">
            <button className="btn-chevron-left"><img src={Chevron} alt=""/></button>
            <span>Alterar forma de pagamento</span>
          </div> */}
          <div className="checkout-card">
            <div className="card-invate">
              <img src={CardIcon} alt="" />
              <p className="ml-3">Adicione um novo cartão de crédito</p>
            </div>
            <div>
              <CleanCard />
            </div>
          </div>
        </div>

        <div className="wizard">
          {/* TODO: componentizar */}
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="form-group">
              <input
                type="text"
                name="number"
                onChange={this.handleChange}
                placeholder="Número do cartão"
                className="form-control"
                noValidate
              />
              <small id="alertNumber" className="form-text text-muted">
                Número de cartão inválido
              </small>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                placeholder="Nome (igual do cartão)"
                className={formErrors.name.length > 0 ? "form-control error" : "form-control"}
                noValidate
              />
              {formErrors.name.length > 0 && (
                <small id="alertName" className="error-message">
                  Insira seu nome completo
                </small>
              )}
            </div>

            <div className="row">
              <div className="col">
                <input
                  type="text"
                  name="expiration"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Validade"
                  noValidate
                />
                <small id="alertExpiration" className="form-text text-muted">
                  Data inválida
                </small>
              </div>
              <div className="col">
                <input
                  type="text"
                  name="code"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="CCV"
                  noValidate
                />
                <small id="alertCCV" className="form-text text-muted">
                  Código inválido
                </small>
              </div>
            </div>

            <div className="form-group mt-3">
              <select
                id="inputState"
                name="timesPaymant"
                className="form-control"
                noValidate
              >
                <option onChange={this.handleChange}>Número de parcelas</option>
              </select>
              <small id="alertCCV" className="form-text text-muted">
                Insira o número de parcelas
              </small>
            </div>

            <button type="submit" className="btn btn-danger float-right">
              Continuar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
