import React, { useState, useEffect } from "react";
import "../styling/herroshowcase.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const contentBlocks = [
  {
    text: "Plan your day: Schedule tasks, reminders and habits so you're ready for the day ahead.",
    image: img1,
  },
  {
    text: "Stay on top of work: Track projects, deadlines and meeting prep without getting overwhelmed.",
    image: img2,
  },
  {
    text: "Keep home in sync: Share grocery lists, chores and family reminders so nothing slips through the cracks.",
    image: img3,
  },
];

const HeroShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % contentBlocks.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section container py-5 px-3">
      {/* Top Heading */}
      <div className="text-center mb-5">
        <h1 className="hero-heading">
          <span className="white-part">Stop juggling </span>
          <span className=" text-secondary">five different apps</span>
        </h1>
        <h2 className="subheading text-white">
          Superlist makes it simple to manage your entire life.
        </h2>
      </div>

      {/* Split Layout */}
      <div className="row align-items-center justify-content-center">
        {/* Left: Text Blocks */}
        <div className="col-lg-4 mb-4 mb-lg-0">
    {contentBlocks.map((block, index) => {
  const isActive = index === activeIndex;
  return (
    <div
      key={index}
      className="d-flex align-items-start mb-4 text-block-wrapper"
      onClick={() => setActiveIndex(index)}
      style={{ cursor: "pointer" }}
    >
      {/* Vertical Line */}
      <div className="progress-bar-vertical">
        {isActive && <div className="progress-fill" key={activeIndex}></div>}
      </div>

      {/* Text */}
      <p className={`fs-5 ms-3 ${isActive ? "text-white fw-semibold" : "text-secondary"}`}>
        {block.text}
      </p>
    </div>
  );
})}

          
        </div>

        {/* Right: Image */}
        <div className="col-lg-6 text-center">
          <img
            src={contentBlocks[activeIndex].image}
            alt="Showcase"
            className="img-fluid showcase-img "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroShowcase;