import React from "react";
import "../styling/Footer.css";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>COLD PRODUCTIONS</h2>
          <p>Crafting premium web experiences with precision and trust.</p>
        </div>

        <div className="footer-links d-sm-flex flex-column flex-md-row gap-5">
          <div>
            <h4>Services</h4>
            <ul>
              <li>Frontend Development</li>
              <li>Fullstack Solutions</li>
              <li>UI/UX Design</li>
              <li>SEO Optimization</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} DEVELOPED BY SIDHARTH. All rights
          reserved.
        </p>
        <div className="social-icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
