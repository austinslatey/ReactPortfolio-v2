import React from "react";
import './Projects.css'
import bugInvaders from './assets/bugInvaders.png'
import winterWonderland from './assets/winterWonderland.png'
import cubeMatcher from './assets/cubeMatcher.png'

export default function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <div className="cardContainer">
                <div className="card">
                    <div className="img-container">
                        <img src={bugInvaders} alt="bugInv"></img>
                    </div>
                    <div className="card-text">
                        <p>Phaser.js Skill Path</p>
                        <a href="https://austinslatey.github.io/bug-invaders/">BugInvaders</a>
                    </div>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img src={cubeMatcher} alt="cubeMatch"></img>
                    </div>
                    <div className="card-text">
                        <p>Phaser.js Skill Path</p>
                        <a href="https://austinslatey.github.io/Cube-Matcher/">CubeMatcher</a>
                    </div>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img src={winterWonderland} alt="winterWonderland"></img>
                    </div>
                    <div className="card-text">
                        <p>Phaser.js Skill Path</p>
                        <a href="https://austinslatey.github.io/winter-wonderland/">WinterWonderland</a>
                    </div>
                </div>
            </div>
        </div>
    );
}