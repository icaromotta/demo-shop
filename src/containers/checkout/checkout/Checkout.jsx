import React, { Component } from "react";
import MaskInput from "react-maskinput";
import "./Checkout.scss";

import Chevron from "./chevron.svg";
import CardIcon from "./card-icon.svg";

import CleanCard from "../../../components/card/clean-card/CleanCard.jsx";
import Card from "../../../components/card/card/Card.jsx";
import Wizard from "../../../components/wizard/Wizard.jsx";

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
      times: "",
      formErrors: {
        number: "",
        name: "",
        code: "",
        expiration: "",
        times: "",
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
        Times Paymant: ${this.state.times}
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
        const cardNumberRegex = /\d{3}(| |-)(?:\d{4}\1){2}\d{4}$/;
        formErrors.number = cardNumberRegex.test(`${value}`) ? "" : "card number invalid";
        break;
      case "name":
        formErrors.name =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "code":
        const onlyNumberRegex = /^[0-9]*$/;
        formErrors.code = onlyNumberRegex.test(value) ? "" : "only numbers";
        break;
      case "expiration":
        const expirationRegex = /^\d{2}\/\d{2}$/;
        formErrors.expiration = expirationRegex.test(value)
          ? ""
          : "invalid date";
        break;
      case "times":
        formErrors.times = value === "" ? "minimum one choice" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="checkout">
        <div className="checkout-side">
          <div className="step-nav mt-4">
            <button
              style={{ position: "absolute" }}
              className="btn-chevron-left"
            >
              <img src={Chevron} alt="" />
            </button>
            <div style={{ width: "100%", textAlign: "center" }}>
              <span>Etapa 2 de 3</span>
            </div>
          </div>
          <div className="paymente-methode checkout-nav mb-3">
            <button className="btn-chevron-left">
              <img src={Chevron} alt="" />
            </button>
            <span>Alterar forma de pagamento</span>
          </div>
          <div className="checkout-card">
            <div className="card-invate">
              <img src={CardIcon} alt="" />
              <p className="ml-3">Adicione um novo cartão de crédito</p>
            </div>
            <div>
              {this.state.number !== "" || this.state.name !== "" || this.state.expiration !== "" || this.state.code !== "" || this.state.times !== "" ? (
                <Card card={this.state} />
              ) : (
                <CleanCard card={this.state} />
              )}
            </div>
          </div>
        </div>

        <div className="checkout-step">

          <Wizard />

          <form onSubmit={this.handleSubmit} noValidate>
            <div className="form-group">
              <MaskInput
                type="text"
                name="number"
                onChange={this.handleChange}
                placeholder="Número do cartão"
                className={
                  formErrors.number.length > 0
                    ? "form-control error"
                    : "form-control"
                }
                mask="0000 0000 0000 0000"
                size={20}
                noValidate
              />

              {formErrors.number.length > 0 && (
                <small id="alertName" className="error-message">
                  Número de cartão inválido
                </small>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                placeholder="Nome (igual do cartão)"
                className={
                  formErrors.name.length > 0
                    ? "form-control error"
                    : "form-control"
                }
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
                <MaskInput
                  type="text"
                  name="expiration"
                  onChange={this.handleChange}
                  className={
                    formErrors.expiration.length > 0
                      ? "form-control error"
                      : "form-control"
                  }
                  placeholder="Validade"
                  mask="00/00"
                  size={5}
                  noValidate
                />

                {formErrors.expiration.length > 0 && (
                  <small className="error-message">Data inválida</small>
                )}
              </div>
              <div className="col">
                <input
                  type="text"
                  name="code"
                  onChange={this.handleChange}
                  className={
                    formErrors.code.length > 0
                      ? "form-control error"
                      : "form-control"
                  }
                  placeholder="CCV"
                  maxLength="3"
                  noValidate
                />

                {formErrors.code.length > 0 && (
                  <small className="error-message">Código inválido</small>
                )}
              </div>
            </div>

            <div className="form-group times mt-3">
              <select
                id="inputState"
                name="times"
                className={
                  formErrors.code.length > 0
                    ? "form-control error"
                    : "form-control"
                }
                noValidate
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="teste"
              >
                <option value="1">Número de parcelas</option>
                <option value="1">1X</option>
                <option value="2">2x</option>
                <option value="3">3x</option>
                <option value="4">4x</option>
                <option value="5">5x</option>
                <option value="6">6x</option>
              </select>

              {formErrors.times.length > 0 && (
                <small className="error-message">
                  Insira o número de parcelas
                </small>
              )}
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
