import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="main-container">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
        </Switch>
        <div className="footer-div"><a className="main-github-link" href="https://github.com/domzalex/portfolio-website-react" target="_blank" rel="noreferrer">View on GitHub</a></div>
      </div>
    </Router>
    
  );
}

const Home = () => {
  return (
    <div>
      <div className="homeContent">
          <h1>Full-stack Web Developer.</h1>
          <Link className="mainHomeLink" to="/Projects">- My Work -</Link>
        </div>
    </div>
  );
}

export default App;
