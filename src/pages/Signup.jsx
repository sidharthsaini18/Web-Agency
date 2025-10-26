import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // 🔐 Add signup logic here (API call, Firebase, etc.)
    console.log("Signing up with:", formData);
  };

  return (
    <section className=" text-light min-vh-100 d-flex flex-column align-items-center">
      <Navbar />
      <div className="container my-5  py-5 ">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card bg-secondary shadow">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Create Account</h2>
                <form onSubmit={handleSignup}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-white">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-white">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
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
                      name="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="confirmPassword"
                      className="form-label text-white"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-warning">
                      Sign Up
                    </button>
                  </div>
                </form>

                <p className="mt-3 text-center text-light">
                  Already have an account?{" "}
                  <a href="/login" className="text-warning">
                    Login
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

export default Signup;
