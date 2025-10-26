import React from "react";
import "../styling/content.css";
import HeroShowcase from "./HeroShowcase";
import Herosection from "../components/Herosection";
import InfoCard from "./Infocard";
import cardData from "../components/data.json"
import FeatureList from "./Features";

import {
  SiReact,
  SiPython,
  SiNextdotjs,
  SiSupabase,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiBootstrap,
} from "react-icons/si";
import Footer from "./Footer";


<SiReact size={40} color="white" />;

const features = [
  { label: "Real-time collaboration", desc: "Work together instantly across devices.", color: "#FF6B6B" },
  { label: "Repeatable tasks", desc: "Create templates for recurring workflows.", color: "#FFD93D" },
  { label: "Offline Support", desc: "Access and edit tasks even without internet.", color: "#6BCB77" },
  { label: "Widgets", desc: "Add mini tools to your dashboard.", color: "#4D96FF" },
  { label: "Nested Lists & Tasks", desc: "Organize tasks hierarchically.", color: "#FF6F91" },
  { label: "Multiplatform", desc: "Works on web, mobile, and desktop.", color: "#845EC2" },
  { label: "Integrations", desc: "Connect with tools like Slack, Notion, etc.", color: "#FFC75F" },
  { label: "Reminders", desc: "Never miss a task with smart alerts.", color: "#F9F871" },
];

const Content = () => {
  const techStack = [
    { name: "Python", icon: SiPython },
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Supabase", icon: SiSupabase },
    { name: "SQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Bootstrap", icon: SiBootstrap },
  ];

 const  handleclick =()=>{
    window.location.href = "/pricing";
 }

  return (
    <section className="page-wrapper content-section text-center px-3  ">
      <h1 className="display-4 fw-bold text-white text-shadow mt-5 pt-5 ">
        Welcome to Our Creative Studio
      </h1>
      <h2 className="display-6 fw-bold orange-text ">
        We Build Brands That Inspire
      </h2>

      <p className="lead mt-4 text-white w-md-50 w-sm-75  mx-auto text-shadow">
        At Web Agency, we craft stunning digital experiences that elevate your
        brand and connect with your audience. From sleek websites to powerful
        web apps, we deliver solutions that are fast, responsive, and
        unforgettable.
      </p>

      <button onClick={handleclick} className="btn  w-sm-75 btn-warning mt-4 px-4 py-2 fw-semibold  mx-auto rounded-5 shadow">
        Get Started
      </button>
      <img
        src="https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Creative Studio"
        className="img-fluid mt-5 rounded-4   mx-auto d-block img-shadow w-sm-75 "
      />
      <div className="m-2 p-2">
        <h6 className="display-6 fw-bold text-white mb-5 ">Our Tech Stack:</h6>

        <div className="row justify-content-center container mx-auto"> 
          {techStack.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div key={index} className="col-6 col-md-3 mb-4 text-center ">
                <IconComponent size={40} color="white" className="mb-2" />
                <div className="tech-name text-white fw-semibold">
                  {tech.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <HeroShowcase />
      <Herosection />
      <div className="d-flex flex-wrap gap-4 justify-content-center p-4">
      {cardData.map((card, index) => (
        <InfoCard
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>

      <FeatureList features={features} />
    </section>
  );
};

export default Content;
