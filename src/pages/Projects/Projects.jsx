import React from "react";
import Presentation from "../../components/Projects/Intro/Presentation";
import Grid from "../../components/Projects/Grid/ProjectsGrid";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <div className="projectIntro">
        <Presentation />
      </div>

      <div className="projectGrid">
        <Grid />
      </div>
    </div>
  );
}

export default Projects;
