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
      <h1>Welcome!</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/subscription">
          <SubcriptionCollection />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
