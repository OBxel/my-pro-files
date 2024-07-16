import React from "react";
import ContactPresentation from "../../components/Contact/Intro/Contact-Presentation";
import ContactForm from "../../components/Contact/Form/Contact-Form";
import ContactCoord from "../../components/Contact/Coord/Contact-Coord";

import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="present-Container">
        <ContactPresentation />
      </div>

      <div className="coord-Container">
        <div className="contact-form-container">
          <ContactForm />
        </div>
        <div className="contact-coord-container">
          <ContactCoord />
        </div>
      </div>
    </div>
  );
}

export default Contact;
