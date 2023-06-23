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
      <NavLink to="/" exact style={styles}>
        Home
      </NavLink>
      <NavLink to="/subscription" exact style={styles}>
        Subscription
      </NavLink>
      <NavLink to="/add-sunscription" style={styles}>
        Add Subscription
      </NavLink>
    </div>
  );
}

export default NavBar;
