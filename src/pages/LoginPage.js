import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./LoginRegForm.module.css";

const LoginPage = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      alert("Logged in successfully!");
      history.push("/");
    } else {
      setErrorMessage("Invalid email or password");
      alert(errorMessage);
    }
  };

  return (
    <div className={classes.container}>
      <h2>Login</h2>
      <div>
        <div>
          <label>Email</label>
          <br />
          <input
            className={classes.loginRegInput}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            className={classes.loginRegInput}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={classes.loginRegBtn} onClick={handleLogin}>
          Login
        </button>
      </div>
      <p className={classes.newaccount}>
        Don't have an account? <a href="/register" className={classes.createNew}>Create New</a>
      </p>
    </div>
  );
};

export default LoginPage;
