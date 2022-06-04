import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api/auth/";

const Registration = ({ user, setUser }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const { name, email, password } = form;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return;
    }

    try {
      setUser({ name: name, email: email, password: password });
      const userData = { name: name, email: email, password: password };

      const response = await axios.post(API_URL + "register", userData);

      if (response.data) {
        navigate("/");
        localStorage.setItem("account", JSON.stringify(response.data));
      }

      return response.data;
    } catch (error) {
      setUser("");
      return error;
    }
  };

  const onChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section>
      <header>register</header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <button type="submit">submit</button>
      </form>
      <div>
        {" "}
        <Link to="/Register">Login</Link>
      </div>
    </section>
  );
};

export default Registration;
