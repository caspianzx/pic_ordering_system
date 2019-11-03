/* Core imports */
import React, { Component } from 'react';
/* imports  CSS */
// import './Order.css';
// import NavBar component and Form Components
import Navbar from './components/navigation/Navbar.jsx'
import View from './components/gallery/galleryView.jsx'

class Gallery extends React.Component {
    render() {
        return (
            <div id="app">
                <Navbar></Navbar>
                <View></View>
            </div>
        );
    }
}

export default Gallery;