import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SubcriptionCollection from "./components/SubcriptionCollection";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SubInfo from "./components/SubInfo";
import AddSubscription from "./components/AddSubscription";
import Login from "./components/Login";
import Logout from "./components/Logout";
import "./components/main.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] =useState("")
  if (!isLogged) {
    return <Login onLogin={setIsLogged} onGetName={getName}/>;
  }

  function handleLogout(logeedOut, username) {
    setIsLogged((isLogged) => (isLogged = logeedOut));
    setName(name => name = username)
  }

  function getName(username){
    setName(username);
  }

  return (
    <div className="App">
      <h1>Welcome {name}!</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Header />
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
