import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SubcriptionCollection from "./components/SubcriptionCollection";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SubInfo from "./components/SubInfo";
import AddSubscription from "./components/AddSubscription";

function App() {
  //set state for id to pass as prop to <SubInfo>
  const [subId, setId] = useState("");
  //function sets id using setId passed from <SubcriptionCollection />
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
          <SubInfo id={subId} />
        </Route>
        <Route exact path="/add-sunscription">
          <AddSubscription />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
