import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./Group 2290.svg";
import "./App.scss";
import Checkout from "./containers/checkout/checkout/Checkout";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-whaite">
          <img src={logo} alt="logo" />
        </nav>
        <Switch>
          <Route path="/">
            <div className="app-wrap">
              <Checkout />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
