import React from 'react';
import './App.css';

function Projects() {
  return (
    <div>
      <div className="project-content">
        <div className="projects-list">
          <div className="project">
            <a href="https://www.bfgproductionsatl.com" rel="noreferrer" target="_blank"><h2 className="project-name">B.F.G. Productions</h2></a>
            <p className="project-text">Landing page/event calendar for an Atlanta-based entertainment company.<br></br><br></br>Front end built with <b>React.js</b>.<br></br><br></br>Back end built with <b>Node.js</b> and <b>MongoDB</b>.</p>
            <div className="project-links">
            <a href="https://github.com/domzalex/gda-website-react" rel="noreferrer" target="_blank">view on GitHub</a>
            </div> 
          </div>
          <div className="project">
            <a href="https://www.theculdesac.club" rel="noreferrer" target="_blank"><h2 className="project-name">The Cul-De-Sac</h2></a>
            <p className="project-text">A public blog with a Visual Studio Code style. Features a user login and a realtime chatroom built using <b>Socket.io</b>.<br></br><br></br>Front end built with <b>Express.js</b>.<br></br><br></br>Back end built with <b>Node.js</b>, <b>MongoDB</b>, and <b>Passport.js</b>.</p>
            <div className="project-links">
            <a href="https://github.com/domzalex/the-cul-de-sac-club" rel="noreferrer" target="_blank">view on GitHub</a>
            </div>
          </div>
          <div className="project">
            <a href="https://domzalex.github.io/wordle-clone/" rel="noreferrer" target="_blank"><h2 className="project-name">Wordle Clone</h2></a>
            <p className="project-text">A clone of the popular word game <b>Wordle</b> created in an evening as a test of skills.<br></br><br></br>No single-word daily limit; play as many times as you want.<br></br><br></br><b>**Not mobile-friendly**</b></p>
            <div className="project-links">
            <a href="https://github.com/domzalex/wordle-clone" rel="noreferrer" target="_blank">view on GitHub</a>
            </div>
          </div>
          <div className="project">
            <a href="https://legendofdragoon.org" rel="noreferrer" target="_blank"><h2 className="project-name">Legend of Dragoon</h2></a>
            <p className="project-text">The global fansite for the video game <i>The Legend of Dragoon</i>.<br></br><br></br>Currently acting as a UX and custom CSS/JS consultant for their current WordPress build.<br></br><br></br><b>**Site is currently in the re-work planning phase.**</b></p>
            <div className="project-links">
            </div>
          </div>
          <div className="project">
            <a href="https://github.com/domzalex/rate-my-venue-atl" rel="noreferrer" target="_blank"><h2 className="project-name">RateMyVenue</h2></a>
            <h3>**UNDER CONSTRUCTION**</h3>
            <p className="project-text">A catered music venue review platform.<br></br><br></br>Front end being built with <b>React.js</b>.<br></br><br></br>Back end being built with <b>Node.js</b>, <b>MongoDB</b>, and <b>Passport.js</b>.</p>
            <div className="project-links">
            <a href="https://github.com/domzalex/rate-my-venue-atl" rel="noreferrer" target="_blank">view on GitHub</a>
            </div>
          </div>
          <div className="project">
            <a href="https://www.studioazure.io" rel="noreferrer" target="_blank"><h2 className="project-name">Studio Azure</h2></a>
            <h3>**UNDER CONSTRUCTION**</h3>
            <p className="project-text">A web development studio.<br></br><br></br>Currently in the design stages; front-end likely to be finalized with <b>React.js</b>.</p>
            <div className="project-links">
            <a href="https://github.com/domzalex/studio-azure-static-test" rel="noreferrer" target="_blank">view on GitHub</a>
            </div>
          </div>
          <div className="project">
            <a href="https://github.com/domzalex/viridian-creators-club" rel="noreferrer" target="_blank"><h2 className="project-name">Viridian Creators Club</h2></a>
            <h3>**UNDER CONSTRUCTION**</h3>
            <p className="project-text">A collaborative creative writing and education community.<br></br><br></br>Front end <i>currently</i> being built with <b>Express.js</b>.<br></br><br></br>Back end being built with <b>Node.js</b>, <b>MongoDB</b>, and <b>Passport.js</b>.</p>
            <div className="project-links">
            <a href="https://github.com/domzalex/viridian-creators-club" rel="noreferrer" target="_blank">view on GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}

export default Projects;
