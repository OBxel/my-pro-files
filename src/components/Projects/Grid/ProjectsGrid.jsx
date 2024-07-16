import React, { useEffect, useState } from "react";
import { fetchProjects } from "../../../api/apiHandler";
import "./projectsGrid.css";

function ProjectsGrid() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err);
      }
    };

    getProjects();
  });

  if (error) {
    return <div>Error fetching projects: {error.message}</div>;
  }

  return (
    <section>
      <div className="projectsGrid">
        {projects.map((project) => (
          <div key={project._id} className="projectBlock">
            <div className="projectTitle">
              <h2>{project.title}</h2>
            </div>
            <div className="projectContent">
              <div className="projectImg">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="projectInfo">
                <p>{project.description}</p>
              </div>
              <div className="projectLinks">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
