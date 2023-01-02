import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SpinningCircles } from "react-loading-icons";
import "../../index.css";

const API_URL = "/api/auth/";

const Login = ({ user, setUser, failed, setFailed, loading, setLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Log in

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    try {
      setLoading(true);
      const userData = { email: email, password: password };
      const response = await axios.post(API_URL + "login", userData);
      setLoading(false);
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      if (response.data) {
        setFailed(false);
        navigate("/");
        localStorage.setItem("account", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      setLoading(false);
      setUser({});
      localStorage.setItem("user", user);
      setFailed(true);
      return error;
    }
  };

  useEffect(() => {
    const acc = localStorage.getItem("account");
    if (acc) {
      navigate("/");
    }
  }, []);

  if (loading) {
    return <SpinningCircles />;
  }

  return (
    <section className="flex flex-wrap justify-center m-0 h-96 w-75 bg-violet-100 border-0 rounded-2xl">
      <header className="flex justify-center text-5xl w-60">Sign in</header>
      <form onSubmit={handleSubmit}>
        <input
          className="flex m-2 p-2"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="flex m-2 p-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="flex justify-center left-3 button-33" type="submit">
          Submit
        </button>
      </form>
      <div className="flex justify-center w-60 h-8">
        {failed && (
          <span className="flex font-bold text-red-600">
            Invalid credentials
          </span>
        )}
      </div>
      <div className="flex m-0 h-8 justify-center">
        <Link
          className="button-3"
          to="/register"
          onClick={() => {
            setFailed(false);
          }}
        >
          Sign up
        </Link>
      </div>
    </section>
  );
};

export default Login;
