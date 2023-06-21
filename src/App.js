//import logo from "./logo.svg";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SubcriptionCollection from "./components/SubcriptionCollection";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <SubcriptionCollection />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
