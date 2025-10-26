import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // 🔐 Add login logic here (API call, Firebase, etc.)
    console.log("Logging in with:", email, password);
  };

  return (
    <section className="mt-4 text-light py-5 min-vh-100 d-flex flex-column align-items-center">
      <Navbar />
      <div className="container py-4 my-4">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card bg-secondary shadow">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-white">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-warning">
                      Login
                    </button>
                  </div>
                </form>

                <p className="mt-3 text-center text-light">
                  Don't have an account?{" "}
                 <a href="/signup" className="text-warning">
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
