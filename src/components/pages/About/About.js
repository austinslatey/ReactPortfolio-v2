import React from "react";
import "./About.css";
import './colors.css';
import selfie from "./assets/imgs/selfie.png"
import skills from "./assets/js/skills";

export default function About() {
    return (
        <div className="cardContainer">
            <div className="card">
                <img src={selfie} alt="About me" />
                <div className="card-text">
                    <h2>About Me</h2>
                    <p>Hello! My name is Austin Slater, and I'm a Full-Stack Web Developer
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
                    meet client needs and solve business problems. In my leisure time, 
                    one might discover me indulging in the activity of fishing in the 
                    region commonly referred to as the 'Land of 10,000 Lakes, watching Rick &
                    Morty, creating culinary delights from raw ingredients, and playing Rocket League on PC.
                    Please feel welcome to connect with me on LinkedIn using the icon provided below, should 
                    you wish to contact me directly. Thank you for taking the time to visit my portfolio, and 
                    I sincerely hope that you find your stay here to be an enjoyable one.
                    Please note that the list of skills below are scrollable, and you can click on any skill to visit its corresponding website/resource</p>
                </div>
            </div>
            <ul className="skills-container">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                        <a href={skill.url} target="_blank" rel="noopener noreferrer" className="skill-name">
                            {skill.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
