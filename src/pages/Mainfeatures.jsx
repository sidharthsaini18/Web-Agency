import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainfeatures = () => {
  const features = [
    {
      title: "Frontend Development",
      desc: "Pixel-perfect, responsive UIs using React, Bootstrap, and modern CSS.",
      icon: "bi bi-laptop",
    },
    {
      title: "Fullstack Solutions",
      desc: "Scalable backend with Node.js, Express, MongoDB, and REST APIs.",
      icon: "bi bi-server",
    },
    {
      title: "UI/UX Design",
      desc: "Interactive, user-first design with animations and clean layouts.",
      icon: "bi bi-easel",
    },
    {
      title: "SEO Optimization",
      desc: "Semantic HTML, meta tags, and performance tweaks for better ranking.",
      icon: "bi bi-graph-up",
    },
    {
      title: "Fiverr Branding",
      desc: "Premium gig structure, copywriting, and client onboarding strategy.",
      icon: "bi bi-stars",
    },
    {
      title: "Compliance & Strategy",
      desc: "Guidance on GST, TCS, and scalable tech stack planning.",
      icon: "bi bi-shield-check",
    },
  ];

  return (
  
      
   
    <section className="fixed text-light  page-wrapper min-vh-100">
      <Navbar />
      <div className="container flex-grow-1 my-5 py-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold">What We Offer</h1>
          <p className="text-warning fs-5">
            Features that make your brand stand out
          </p>
        </div>

        <div className="row g-4 m-4">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-4 " key={index}>
              <div className="p-3 bg-secondary h-100 rounded-4 shadow-sm">
                <div className="mb-1">
                  <i className={`${feature.icon} fs-2 text-warning`}></i>
                </div>
                <h4 className="fw-semibold text-white">{feature.title}</h4>
                <p className="text-light">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
    

  );
};

export default Mainfeatures;
