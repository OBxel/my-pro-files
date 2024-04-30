import React from "react";
import Presentation from "../../components/Home/Presentation";

import "./Home.css";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Bienvenue sur la page d'accueil de notre blabla application.</p>
      <Presentation />
      <div>
        Dans cette partie je vais parler de moi à tout le monde afin que l'on me
        recrute et je vais mettre des accents comme é à è etc
      </div>
      <div>Tech front</div>
      <div>tech back</div>
    </div>
  );
}

export default Home;
