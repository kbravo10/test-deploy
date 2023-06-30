import React from "react";
import "./main.css";

function Login({ onLogin, onGetName }) {
  //functions fires when the user submits form
  //converts form into an object and setd login to true, sends the user input for diapling username
  function handleSubmit(event) {
    const loginForm = Object.fromEntries(new FormData(event.target).entries());
    onLogin(true);
    if (loginForm.username !== "") {
      onGetName(loginForm.username);
    } else onGetName("User");
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
