import React, { useState } from "react";
import "../styling/featurelist.css";

const FeatureList = ({ features }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({
      x: e.clientX,
      y: e.clientY + window.scrollY,
    });
  };

  return (
    <div className="feature-list-container" onMouseMove={handleMouseMove}>
      {features.map((item, index) => {
        const isHovered = hoveredIndex === index;
        return (
          <div
            key={index}
            className="feature-item"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              color: isHovered ? item.color : "white",
            }}
          >
            <span className="feature-label">{item.label}</span>
            {isHovered && (
              <div
                className="tooltip-box"
                style={{
                  position: "fixed",
                  top: `${cursorPos.y + 4}px`,
                  left: `${cursorPos.x + 6}px`,
                  backgroundColor: item.color,
                }}
              >
                {item.desc}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FeatureList;