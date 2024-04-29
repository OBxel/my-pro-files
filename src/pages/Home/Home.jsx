import React from "react";
import "../Home/Home.css";
import Presentation from "../../components/Home/Presentation";

// function encodeURIComponent(str) {
//   return encodeURIComponent(str);
// }

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Bienvenue sur la page d'accueil de notre application.</p>
      <Presentation />
      <div>about me</div>
      <div>Tech front</div>
      <div>tech back</div>
    </div>
  );
}

export default Home;
