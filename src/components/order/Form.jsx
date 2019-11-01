/* Core imports */
import React, { Component } from 'react';
/* CSS imports  */
import './Form.css';
// components imports
import InfoFieldset from './fieldsets/info.jsx'
import QuantityFieldset from './fieldsets/quantity.jsx'
import Summary from './Summary.jsx'

class Orderform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          /* Form options */
          lastName: '',
          firstName: '',
          phoneNum: '',
          country: 'Singapore',
          email: '',
          address: '',
          numCopies1: 0,
          numCopies2: 0,
          numCopies3: 0,
          numCopies4: 0,
          numCopies5: 0,
          /* Model used for navigation between fieldsets */
          submitted: false,
        }
    //functions need to be binded to pass into child component
    this.updateForm = this.updateForm.bind(this);

    }

    /* Function to navigate between form fieldsets
   false means not submitted, true means submitted */
    // navigate = () => {
    //     this.setState({submitted: true})
    // }

    /* Function to add basic validation before displaying summary */
    validateForm = (event) => {
        //storing value of this.state object as an array
        const value = Object.values(this.state);
        //loop through array and search for empty strings
        console.log(value)
        for(let i=0; i < value.length ; i++) {
            //if fields are empty, give user a message
            if (value[i] === "") {
                this.setState({submitted: false})
                return (alert("all fields are mandatory!"));
            //if photos are empty, give user a message
            }else {
                this.setState({submitted: true})
            }
        }
    }

    /* Function that updates a given form input value to the corresponding form options */
    updateForm = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(target.value)
        this.setState({[name]: value});
    }

    render() {
        if (this.state.submitted === false) {
            return (
            <form id="order">
                <div>
                    <InfoFieldset updateForm={this.updateForm}></InfoFieldset>
                    <QuantityFieldset validateForm={this.validateForm} updateForm={this.updateForm}></QuantityFieldset>
                </div>
             </form>
            );
        } else if (this.state.submitted === true) {
            return (
                <form id="order">
                    <div>
                        <Summary state={this.state}></Summary>
                    </div>
                </form>
            );
        }
    }
}

export default Orderform;