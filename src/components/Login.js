import React from "react";
import "./login.css";
import Linkedin from "../images/linkedin_hack.png";

function Login() {
  return (
    <div className="login">
      <img src={Linkedin} alt="linkedin" />
      <form autoComplete="off" className="login__form">
        <input
          type="text"
          placeholder="Enter your name (only require registration"
          name="name"
        />
        <input type="text" name="profile" placeholder="Enter profile url" />
        <input type="email" name="email" placeholder="Ente user email" />
        <input type="password" name="password" placeholder="Enter Password" />
        <button className="sign__btn" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
