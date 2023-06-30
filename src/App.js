import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SubcriptionCollection from "./components/SubcriptionCollection";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SubInfo from "./components/SubInfo";
import AddSubscription from "./components/AddSubscription";
import Login from "./components/Login";
import Logout from "./components/Logout";
import "./components/main.css";


function App() {
  //set a is logged in state to check if im logged in and display correct page
  //set name from login page and display at top for the welcome
  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState("");

  //check if logged in, if yes go to app page, if not display login page
  if (!isLogged) {
    return <Login onLogin={setIsLogged} onGetName={getName} />;
  }

  // if the user logs out this finction will handle and set isLogged in to false
  function handleLogout(logeedOut) {
    setIsLogged((isLogged) => (isLogged = logeedOut));
  }

  //sets name for welcome display
  function getName(username) {
    setName(username);
  }

  return (
    <div className="App">
      <h1>Welcome {name}!</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/subscription">
          <SubcriptionCollection />
        </Route>
        <Route exact path={`/subscription/:id`}>
          <SubInfo />
        </Route>
        <Route exact path="/add-sunscription">
          <AddSubscription />
        </Route>
        <Route to="/logout">
          <Logout onLogin={handleLogout} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
