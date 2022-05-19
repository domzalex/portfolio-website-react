import React from 'react';
import './App.css';


function About() {
  return (
      <div>
        <div className="aboutContent">
          <h1>About me</h1>
          <p className="about-text">My name is Alex Domzalski and I am a full-stack web developer with focus on the MERN development stack (MongoDB, Express.js, React.js, Node.js). Outside of development, I am a touring and session bassist. Along with my music and development work, I am studying to become a licensed falconer and hope to aid in the conservation of migratory birds of prey.
          <br></br><br></br>
          If you'd like to reach out, <a href="mailto:hello@alexdomzalski.com" target="_blank">this</a> is my email.</p>
        </div>
      </div>
)
}

export default About;