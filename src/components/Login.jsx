import "./component-styles/Login.css";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../context/blog/BlogActions";
import BlogContext from "../context/blog/BlogContext";

function Login() {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formdata;

  const { dispatch } = useContext(BlogContext);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = await login(formdata);
    dispatch({
      type: "SIGN_IN_USER",
      payload: user,
    });

    navigate("/");
  };

  return (
    <div className="login-card">
      <h2>Please log in to start !</h2>
      <form className="login-fields" onSubmit={onSubmit}>
        <label htmlFor="email" className="email-label">
          Email:{" "}
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={onChange}
            required
          />
        </label>
        <label htmlFor="password" className="password-label">
          Password:{" "}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={onChange}
            required
          />
        </label>

        <button className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
