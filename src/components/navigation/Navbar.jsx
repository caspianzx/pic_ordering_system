/* Core imports */
import React, { Component } from 'react';
/* Component imports */
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src={logo} height="30" alt=""/>
                </a>
                <h1>Palopic Order System</h1>
            <Link className="btn" to="/gallery">Gallery</Link>
          </nav>
        );
    }
}

export default Navbar;