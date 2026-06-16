import React from "react";
import style from "../component/Login.module.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid login-page">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="card login-card shadow">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Login Form</h2>

                <form>
                  <div className="mb-3">
                    <label className="form-label">userName</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter userName"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                  </div>

                  <button
                    className="btn btn-primary w-100"
                    onClick={() => navigate("/Home")}
                  >
                    Login
                  </button>

                  <p className="text-center mt-3">
                    Don't have an account? <a href="/Rigister">Signup</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
