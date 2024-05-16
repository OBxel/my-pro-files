import React from "react";
import Presentation from "../../components/Home/Intro/Presentation";
import TechFront from "../../components/Home/Front/TechFront";
import TechBack from "../../components/Home/Back/TechBack";

import "./Home.css";

function Home() {
  return (
    <div>
      <div className="presentationContainer">
        <Presentation />
      </div>

      <div className="techContainer">
        <div className="techFront">
          <TechFront />
        </div>
        <div className="techBack">
          <TechBack />
        </div>
      </div>
    </div>
  );
}

export default Home;
