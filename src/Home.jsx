/* Core imports */
import React, { Component } from 'react';
// import css
import './Home.css';
/* Component imports */
import Navbar from './components/navigation/Navbar.jsx'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div id="app">
        <Navbar></Navbar>
        <h1 id="main">Order your souvenirs of Phuket!</h1>
        <Link id="order" to="/order" className="btn btn-success">Order Now</Link>
      </div>
    );
  }
}

export default Home;