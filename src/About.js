import React from 'react';
import './App.css';


function About() {
  return (
      <div>
        <div className="aboutContent">
          <h2>I'm Alex Domzalski...</h2>
          <p className="about-text">... a full-stack web developer with focus on the MERN development stack and a part of the engineering group for <a href="https://www.studioazure.io" target="_blank">studioazure.io</a> where I help with development sprints.<br></br><br></br>Outside of development, I am a touring and session bassist and am studying to become a licensed falconer with hopes to aid in the conservation of migratory birds of prey.<br></br><br></br>Should you have any questions for me regarding work or just want to geek out with me over music gear or Elden Ring, don't hesitate to reach out.<br></br><br></br>Cheers!</p>
          <div className="about-links">
            <a href="mailto:hello@alexdomzalski.com" className="github" target="_blank">e-mail</a>
            <a href="https://www.instagram.com/alex.domzalski" className="github instagram" target="_blank">instagram</a>
          </div>
        </div>
      </div>
)
}

export default About;