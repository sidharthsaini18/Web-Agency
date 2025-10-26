import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹4,999",
      features: [
        "1-page responsive website",
        "Custom design",
        "Delivery in 3 days",
        "Basic SEO setup",
      ],
      btn: "Get Started",
      color: "secondary",
    },
    {
      name: "Standard",
      price: "₹9,999",
      features: [
        "Up to 5 pages",
        "Interactive UI/UX",
        "Contact form integration",
        "Mobile-first design",
        "Delivery in 5 days",
      ],
      btn: "Most Popular",
      color: "primary",
    },
    {
      name: "Premium",
      price: "₹19,999+",
      features: [
        "Fullstack web app",
        "Admin dashboard",
        "Animations & tooltips",
        "SEO + performance optimized",
        "Delivery in 7–10 days",
      ],
      btn: "Book Now",
      color: "warning",
    },
  ];

  return (
    <section className=" text-light py-5">
      <Navbar />
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold">Pricing Plans</h1>
          <p className="text-warning fs-5">
            Choose the package that fits your vision
          </p>
        </div>

        <div className="row g-4">
          {plans.map((plan, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className={`card h-100 border-${plan.color} shadow`}>
                <div
                  className={`card-header bg-${plan.color} text-white text-center`}
                >
                  <h4 className="my-2">{plan.name}</h4>
                </div>
                <div className="card-body text-center">
                  <h2 className="card-title">{plan.price}</h2>
                  <ul className="list-unstyled mt-3 mb-4">
                    {plan.features.map((f, i) => (
                      <li key={i} className="mb-2">
                        ✅ {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`btn btn-${plan.color} px-4`}>
                    {plan.btn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Pricing;
