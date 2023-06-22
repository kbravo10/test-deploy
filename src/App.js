//import logo from "./logo.svg";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SubcriptionCollection from "./components/SubcriptionCollection";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SubInfo from "./components/SubInfo";
import AddSubscription from "./components/AddSubscription";

function App() {
  const [subId, setId] = useState("");

  function getId(id) {
    setId(id);
  }
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/subscription">
          <SubcriptionCollection getId={getId} />
        </Route>
        <Route exact path={`/subscription/${subId}-subscription`}>
          <SubInfo />
        </Route>
        <Route exact path="/add-sunscription">
          <AddSubscription />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
