import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api/auth/";

const Registration = ({ user, setUser }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const { name, email, password } = form;

  const [invalid, setInvalid] = useState("");

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
        setInvalid("");
      }

      return response.data;
    } catch (error) {
      setUser("");
      setInvalid(true);
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
    <section className="flex flex-wrap justify-center m-0 h-96 w-60 bg-slate-200">
      <header className="flex justify-center text-4xl w-60">Register</header>
      <form onSubmit={handleSubmit}>
        <input
          className="flex"
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          className="flex"
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          className="flex"
          type="text"
          placeholder="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <button
          className="flex justify-center bg-sky-500 button-3"
          type="submit"
        >
          submit
        </button>
      </form>
      <div className="flex m-0 h-8 w-60 justify-center">
        {invalid && (
          <span className="flex font-bold text-red-600">
            Invalid credentials
          </span>
        )}
      </div>
      <div className="flex m-0 h-8 justify-center">
        <Link className="button-33" to="/Register">
          Login
        </Link>
      </div>
    </section>
  );
};

export default Registration;
