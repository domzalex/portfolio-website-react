import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

function Nav() {
    return (
        <div>
          <nav>
            <Link to="/About" className="nav-link"><li>about</li></Link>
            <a href="https://theculdesac.club/" rel="noreferrer" className="nav-link"target="_blank">blog</a>
            <Link to="/" className="homeLink"><li>Alex<br />Domzalski</li></Link>
            <a href="https://github.com/domzalex" rel="noreferrer" className="nav-link" target="_blank">github</a>
            <Link to="/Projects" className="nav-link"><li>projects</li></Link>
          </nav>
          <nav className="mobile-nav">
            <Link to="/" className="homeLink"><li>Alex Domzalski</li></Link>
            <div className="mobile-links">
            <Link to="/About" className="nav-link"><li>about</li></Link>
            <a href="https://theculdesac.club/" rel="noreferrer" className="nav-link"target="_blank">blog</a>
            <a href="https://github.com/domzalex" rel="noreferrer" className="nav-link" target="_blank">github</a>
            <Link to="/Projects" className="nav-link"><li>projects</li></Link>
            </div>
          </nav>
        </div>
          
    );
}

export default Nav;