import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./Group 2290.svg";
import "./App.scss";


import Card from "./components/card/card/Card";
import BackCard from "./components/card/back-card/BackCard";
import CleanCard from "./components/card/clean-card/CleanCard";
import BackCleanCard from "./components/card/back-clean-card/BackCleanCard";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img src={logo} alt="logo" />
        </nav>
        <Switch>
          <Route path="/">
            <Card />
            <BackCard />
            <CleanCard />
            <BackCleanCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
