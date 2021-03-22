import React from 'react';
import './App.css';

function Projects() {
  return (
    <div>
      <div className="project-content">
        <div className="projects-list">
          <div className="project">
            <img className="project-img" src="https://i.ibb.co/SKSsCtF/bfg-banner-1.jpg" alt=""></img>
            <h2 className="project-name">B.F.G. Productions</h2>
            <p className="project-text">Entertainment company website made with the MERN stack. MongoDB courtesy of their Atlas cloud service.</p>
            <div className="project-links">
            <a href="http://www.bfgbandatl.com" target="_blank">Live Site</a>
            <a href="https://github.com/domzalex/gda-website-react" target="_blank">GitHub</a>
            </div> 
          </div>
          <div className="project">
            <img className="project-img" src="https://i.ibb.co/jv3Hmjs/Screen-Shot-2021-03-22-at-12-27-40-PM.png" alt=""></img>
            <h2 className="project-name">Events Manager</h2>
            <p className="project-text">An events manager/CMS created for B.F.G. Productions to add new events to their website without needing a developer.</p>
            <div className="project-links">
            <a href="https://github.com/domzalex/gda-events-manager" target="_blank">GitHub</a>
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
