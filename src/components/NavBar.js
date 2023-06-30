import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

function NavBar({onLogin}) {
  return (
    <div className="navbar">
      <NavLink to="/" exact className="navlink">
        Home
      </NavLink>
      <NavLink to="/subscription" exact className="navlink">
        Subscription
      </NavLink>
      <NavLink to="/add-sunscription" className="navlink">
        Add Subscription
      </NavLink>
      <NavLink to="/logout" className="navlink" onClick={() => onLogin(false)}>
        Logout
      </NavLink>
    </div>
  );
}

export default NavBar;
