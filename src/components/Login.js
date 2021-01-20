import React, { useState } from "react";
import "./login.css";
import Linkedin from "../images/linkedin_hack.png";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const loginApp = (e) => {
    e.preventDefault();
  };
  const register = () => {
    if (!name) {
      return alert("Please enter fullName");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) =>
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profile,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profile,
              })
            );
          })
      )
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <img src={Linkedin} alt="linkedin" />
      <form autoComplete="off" className="login__form">
        <input
          type="text"
          placeholder="Enter your name (require if registration"
          name={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name={profile}
          onChange={(e) => setProfile(e.target.value)}
          placeholder="Enter profile pic url"
        />
        <input
          type="email"
          name={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ente user email"
        />
        <input
          type="password"
          name={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button className="sign__btn" onClick={loginApp} type="submit">
          Sign in
        </button>
      </form>
      <p>
        not a member?{" "}
        <span className="login__register" onClick={register}>
          register now
        </span>
      </p>
    </div>
  );
}

export default Login;
