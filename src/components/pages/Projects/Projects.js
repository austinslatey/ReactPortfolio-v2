import React from "react";
import "./Projects.css";
import projectsData from "./assets/js/projectsData";

export default function Projects() {
  return (
    <div>
      <div className="cardContainer">
        {projectsData.map((project) => (
          <div className="card" key={project.id}>
            <div className="img-container">
              <img src={project.image} alt={project.title} className="card-img" />
            </div>
            <div className="card-text">
              <p>{project.description}</p>
              <a href={project.link}>{project.title}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}