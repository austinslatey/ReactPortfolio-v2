import React from "react";
import './Projects.css'
import bugInvaders from './assets/bugInvaders.png'
import winterWonderland from './assets/winterWonderland.png'
import cubeMatcher from './assets/cubeMatcher.png'

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div className="cardContainer">
                <div className="card">
                    <img src={bugInvaders} alt="bugInv"></img>
                    <div className="card-text">
                        <p>Phaser.js Skill Path</p>
                        <a href="https://austinslatey.github.io/bug-invaders/">Play Bug-Invaders</a>
                    </div>
                </div>
                <div>
                    <img src={cubeMatcher} alt="cubeMatch"></img>
                    <div className="card-text">
                        <p>Phaser.js Skill Path</p>
                        <a href="https://austinslatey.github.io/Cube-Matcher/">Play Cube-Matcher</a>
                    </div>
                </div>
                <div>
                    <img src={winterWonderland} alt="winterWonderland"></img>
                    <div className="card-text">
                        <p>Phaser.js Skill Path</p>
                        <a href="https://austinslatey.github.io/winter-wonderland/">Play Winter-Wonderland</a>
                    </div>
                </div>
            </div>
        </div>
    );
}