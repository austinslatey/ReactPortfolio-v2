import React from "react";
import "./Projects.css";
import projectsData from "./assets/js/projectsData";

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="cardContainer">
        {projectsData.map((project) => (
          <div className="card" key={project.id}>
            <div className="img-container">
              <img src={project.image} alt={project.title}></img>
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