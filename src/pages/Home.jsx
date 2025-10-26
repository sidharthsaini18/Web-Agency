import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Footer/>
      <Outlet />
    </>
  );
};

export default Home;
