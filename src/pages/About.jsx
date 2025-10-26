import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
   
 

    <section className=" text-light ">
    
      <Navbar />
      <div className="container py-5 mt-5">
        <div className="row mb-4">
          <div className="col text-center">
            <h1 className="display-5 fw-bold">About Cold Productions</h1>
            <p className="lead text-warning">
              Building premium web experiences with precision and trust.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="fs-5">
              Sidharth Agency is driven by a passion for clean design, scalable
              architecture, and client-first development. We specialize in
              frontend and fullstack web solutions, delivering pixel-perfect
              UI/UX and interactive components for startups, portfolios, and
              businesses.
            </p>
            <p className="fs-5">
              Every project is crafted with care — from responsive layouts and
              animated tooltips to SEO-friendly structures and onboarding flows.
              Our goal is simple: elevate your brand with clarity, creativity,
              and technical excellence.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>

  );
};

export default About;
