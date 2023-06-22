import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/subscription">
        Subscription
      </NavLink>
    </div>
  );
}

export default NavBar;
