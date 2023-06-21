import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" exact>
      
      </NavLink>
      <NavLink to="/subscription">
        Subscription
      </NavLink>
    </div>
  );
}

export default NavBar;
