import React from "react";
import "./TechBack.css";

function TechBack() {
  return (
    <section id="techBack">
      <div className="container">
        <h2> Mes technologies back</h2>
      </div>
      <div className="techBack-container">
        <div className="techBack-list">
          <li>Node</li>
          <li>MongoDB</li>
          <li>Cloudinary</li>
          <li>Framework: Express</li>
        </div>
      </div>
    </section>
  );
}

export default TechBack;
