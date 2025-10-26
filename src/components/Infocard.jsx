import React from "react";
import "../styling/infocard.css";

const InfoCard = ({ image, title, description }) => {
  return (
    <div className="info-card d-flex flex-column align-items-center text-center p-3">
      <img src={image} alt={title} className="card-image mb-3" style={{height:"14rem"}} />
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
  );
};

export default InfoCard;