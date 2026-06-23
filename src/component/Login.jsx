import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!data.success) {
      alert(data.message);
      return;
    }

    const user = data.user;

    localStorage.setItem("user", JSON.stringify(user));

    const role = user.state;

    if (role === "Clerk") {
      navigate("/clerk");
    } else if (role === "Manager") {
      navigate("/manager");
    } else if (role === "Contractor") {
      navigate("/contractor");
    }
  };

  return (
    <div className={style.loginContainer}>
      <div className={style.overlay}>
        <h1 className={style.title}>Coal Management System</h1>

        <div className={style.loginBox}>
          <h2>Login</h2>

          <form onSubmit={handleLogin}>
            <label>ID</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
