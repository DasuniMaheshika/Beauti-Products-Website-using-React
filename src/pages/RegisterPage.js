import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from './LoginRegForm.module.css'

const RegisterPage = () => {
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((u) => u.email === email);

    if (userExists) {
      setErrorMessage("User already exists with this email");
      alert(errorMessage);
    } else {
      const newUser = { firstName, lastName, email, password, dob };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registered successfully!");
      history.push("/login");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <div>
        <label>First Name</label>
        <br />
        <input
        className={classes.loginRegInput}
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name</label>
        <br />
        <input
        className={classes.loginRegInput}
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
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
      <div>
        <label>Date of Birth</label>
        <br />
        <input
        className={classes.loginRegInput}
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <button className={classes.loginRegBtn} onClick={handleRegister}>Register</button>
      <p className={classes.newaccount}>
        Already have an account? <a href="/login" className={classes.loginAgain}>Login</a>
      </p>
    </div>
  );
};

export default RegisterPage;
