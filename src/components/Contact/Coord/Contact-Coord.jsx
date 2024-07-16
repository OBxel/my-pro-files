import React from "react";

import "./Contact-Coord.css";

function ContactCoord() {
  return (
    <div>
      <div className="contact-info">
        <h3>Mes Coordonnées</h3>
        <p>Email: olivier.a.brule@gmail.com</p>
        <p>Téléphone: +33 6 23 89 26 83</p>

        <div className="social-links">
          <h3>Suivez-moi</h3>
          <a
            href="https://www.linkedin.com/in/olivier-brul%C3%A9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactCoord;
