import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="cardContainer">
      <div className="card">
        <img
          src="https://via.placeholder.com/750x500.png?text=About+me"
          alt="About me"
        />
        <div className="card-text">
          <h2>About me</h2>
          <p id="a-text" className="about-text">
            Hello! My name is Austin Slater, and I'm a Full-Stack Web Developer
            from Minnesota. As a Full-Stack Web Developer, I work on both the
            client-side and server-side of web applications, and I'm proficient
            in programming languages and technologies such as HTML, CSS,
            JavaScript, JQuery, React.js, Node.js, SQL, and more. Currently, I
            have the pleasure to be employed as an Instructional Specialist for
            edX, where I assist students as they gradually learn Web Development.
            I enjoy learning new concepts to further educate myself in Web and
            Software Development, and my go-to tools are CodeCademy and thorough
            documentation reading. Since my graduation from the University of
            Minnesota's Full-Stack Web Development Bootcamp, I've acquired a wide
            range of skills and experience in developing web applications that
            meet client needs and solve business problems. In my free time, you
            can find me fishing in the Land of 10,000 Lakes, watching Rick &
            Morty, cooking foods from scratch, and playing Rocket League on PC.
            Feel free to connect with me on LinkedIn using the icon below to
            reach out to me directly. Thank you for visiting my portfolio, and I
            hope you enjoy your stay here.
          </p>
          <div className="skills-container">
            <h3>Skills</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS & Bootstrap</li>
              <li>JavaScript</li>
              <li>Jquery</li>
              <li>Phaser.js</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Document Object Model & Web APIs</li>
              <li>3rd Party Web APIs</li>
              <li>Server Side APIs</li>
              <li>HTML Handlebars</li>
              <li>React.js & State</li>
              <li>Login Authorization</li>
              <li>SQL</li>
              <li>Sequelize</li>
              <li>GraphQL</li>
              <li>Progressive Web Applications</li>
              <li>Git Bash</li>
              <li>Linux VM & Dual Boot</li>
              <li>Python</li>
              <li>Powershell</li>
              <li>C#</li>
              <li>Object Oriented Programming</li>
              <li>Object Relational Mapping</li>
              <li>Basics of Computer Science: JavaScript</li>
              <li>Basics of Computer Science: Python</li>
              <li>Regular Expressions</li>
              <li>Agile Project Management</li>
              <li>SCRUM Project Management</li>
              <li>VS Code Text Editor</li>
              <li>VIM Text Editor</li>
              <li>Nano Text Editor</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
