import React from "react";
import "./component-styles/Login.css";

function Login() {
  return (
    <div className="login-card">
      <h2>Log In</h2>
      <div className="login-fields">
        <label htmlFor="email" className="email-label">
          Email:{" "}
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </label>
        <label htmlFor="password" className="password-label">
          Password:{" "}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </label>

        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default Login;
