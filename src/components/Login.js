import React from "react";
import "./main.css";

function Login({ onLogin }) {
  function handleChange() {}
  function handleSubmit() {
    onLogin(true);
  }
  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="username">
        <label>UserName:</label>
        <input type="text" name="username" onChange={handleChange}></input>
      </div>
      {/* <div className="password">
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange}></input>
      </div> */}
      <div className="submit">
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default Login;
