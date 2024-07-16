import React, { useEffect, useState } from "react";

import "./Competences.css";

function Competences() {
  const [isVisible, setIsVisible] = useState({
    list1: false,
    list2: false,
  });

  useEffect(() => {
    setTimeout(() => setIsVisible((prev) => ({ ...prev, list1: true })), 100);
    setTimeout(() => setIsVisible((prev) => ({ ...prev, list2: true })), 300);
  }, []);

  return (
    <section id="competences">
      <div className="container">
        <h2>Competences</h2>
      </div>
      <div className="competences-container">
        <div
          className={`competences-list fromLeft ${
            isVisible.list1 ? "visible" : "hidden"
          }`}
        >
          <li>Code propre, modulable et efficace.</li>
          <li>Développement dirigé par les tests.(TDD)</li>
          <li>Conception adaptative avec une approche mobile d'abord.</li>
          <li>Programmation orientée objet. (POO)</li>
          <li>Programmation fonctionnelle. (PF)</li>
        </div>
        <div
          className={`competences-list fromRight ${
            isVisible.list2 ? "visible" : "hidden"
          }`}
        >
          <li>API REST.</li>
          <li>Travail en binôme et travail en équipe.</li>
          <li>
            Bases de données relationnelles et ODM. (mappage objet-document)
          </li>
          <li>Intégration d'APIs externes.</li>
          <li>Gestion serveur & hébergement.</li>
          <li>Méthodologies agiles. (SCRUM)</li>
        </div>
      </div>
    </section>
  );
}

export default Competences;
