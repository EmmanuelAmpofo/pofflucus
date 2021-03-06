import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fakeData from "./auth/data";

import "./loginStyle.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  //Handle changes in input fields

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //Email validation syntax
  const validateEmail = (email) => {
    const valid =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valid.test(String(email).toLowerCase());
  };

  //Check password length
  const validatePassword = (passwd, minLength) => {
    const passwordLength = passwd.length > minLength;
    return passwordLength;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validEmail = validateEmail(email);
    const validPassword = validatePassword(password, 8);
    if (validEmail && validPassword) {
      if (fakeData.login(email, password)) {
        navigation("/page1");
        setEmail("");
        setPassword("");
      } else {
        alert("Invalid username and password");
      }
    }
  };
  return (
    <div className="main">
      <form action="" className="formLogin" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit" className="submitBtn" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
