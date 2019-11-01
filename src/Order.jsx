/* Core imports */
import React, { Component } from 'react';
/* imports  CSS */
import './Order.css';
// import NavBar component and Form Components
import Navbar from './components/navigation/Navbar.jsx'
import Form from './components/order/Form.jsx'

class Order extends React.Component {
    render() {
        return (
            <div id="app">
                <Navbar></Navbar>
                <Form></Form>
            </div>
        );
    }
}

export default Order;