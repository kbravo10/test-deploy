import React from "react";
import "./main.css";

function Login({ onLogin, onGetName }) {
  function handleSubmit(event) {
    const loginForm = Object.fromEntries(new FormData(event.target).entries());
    onLogin(true);
    onGetName(loginForm.username);
  }
  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="username">
        <label>UserName:</label>
        <input type="text" name="username"></input>
      </div>
      <div className="submit">
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default Login;
