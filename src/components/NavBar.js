import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  display: "inline-block",
  width: "150px",
  padding: "12px",
  margin: "0 6px 100px",
  background: "blue",
  color: "white",
};
function NavBar() {
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
      <NavLink to="/logout" className="navlink">
        Logout
      </NavLink>
    </div>
  );
}

export default NavBar;
