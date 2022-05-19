import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import alexImg from './alex.png'
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
      </div>
    </Router>
    
  );
}

const Home = () => {
  return (
    <div>
      <div className="homeContent">
          <img className="homeImg" src={alexImg}></img>
          <h1>Hey! I'm Alex.<br></br>Web developer.</h1>
          {/* <Link className="mainHomeLink" to="/Projects">- Projects -</Link> */}
        </div>
    </div>
  );
}

export default App;
