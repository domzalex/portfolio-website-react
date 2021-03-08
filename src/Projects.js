import React from 'react';
import './App.css';

function Projects() {
  return (
    <div>
      <div className="project-content">
        <div className="projects-list">
          <div className="project">
            <img className="project-img" src="https://i.ibb.co/k6438Yz/New-Project.jpg" alt=""></img>
            <h2 className="project-name">Grateful Dan Prod.</h2>
            <p className="project-text">Entertainment company website using GSAP animations, and Node/MongoDB for the events page.</p>
            <div className="project-links">
            <a href="http://www.gratefuldanatl.com" target="_blank">Live Site</a>
            <a href="#" target="_blank">GitHub</a>
            </div> 
          </div>
          <div className="project">
            <img className="project-img" src="https://i.ibb.co/Qp7DmH3/cdsimg.png" alt=""></img>
            <h2 className="project-name">The Cul-De-Sac</h2>
            <p className="project-text">A public blog in a retro-computer style. Back-end made with Node/MongoDB. Authentication made with Passport.</p>
            <div className="project-links">
            <a href="http://www.theculdesac.club" target="_blank">Live Site</a>
            <a href="https://github.com/domzalex/the-cul-de-sac-club" target="_blank">GitHub</a>
            </div>
          </div>
          <div className="project">
            <img className="project-img" src="https://i.ibb.co/PtFFHpS/skeleton.png" alt=""></img>
            <h2 className="project-name">Skeleton Gauntlet</h2>
            <p className="project-text">My first JavaScript project. A short, turn-based RPG-style game. Completely vanilla JS. All graphics created by me.
          </p>
            <div className="project-links">
            <a href="http://www.alexdomzalski.com/skeletonGauntlet/index.html" target="_blank">Live Site</a>
            <a href="#" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}

export default Projects;