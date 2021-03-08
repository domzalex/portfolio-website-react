import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

function Nav() {
    return (
          <nav>
            <Link to="/About" className="nav-link"><li>about</li></Link>
            <a href="http://theculdesac.club/" className="nav-link"target="_blank">blog</a>
            <Link to="/" className="homeLink"><li>Alex<br />Domzalski</li></Link>
            <a href="https://github.com/domzalex" className="nav-link" target="_blank">github</a>
            <Link to="/Projects" className="nav-link"><li>projects</li></Link>
          </nav>
    );
}

export default Nav;