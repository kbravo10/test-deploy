//import logo from "./logo.svg";
import React from "react";
import "./App.css";
import SubcriptionCollection from "./components/SubcriptionCollection";
import Header from "./components/Header";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <SubcriptionCollection />
    </div>
  );
}

export default App;
