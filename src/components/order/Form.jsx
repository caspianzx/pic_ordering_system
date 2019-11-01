/* Core imports */
import React, { Component } from 'react';
/* CSS imports  */
import './Form.css';
// components imports
import InfoFieldset from './fieldsets/info.jsx'
import QuantityFieldset from './fieldsets/quantity.jsx'
// import Summary from './Summary.jsx'

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
    navigate = () => {
        this.setState({submitted: true})
    }

    /* Function to add basic validation before displaying summary */
    validateForm = (event) => {
        var inputs =  Array.from(document.getElementsByTagName('input'))
        var emptyInputs = inputs.filter(x => x.value.trim() === '')
        if (emptyInputs.length > 0) {
      alert("All fields are mandatory. No fields can be empty.")
        return false
        } else {
            this.navigate()
        }
    }

    /* Function that updates a given form input value to the corresponding form options */
    updateForm = (event) => {
        const target = event.target;
        const value = target.value;
        console.log(target.name)
        const name = target.name;
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
            )
        } else if (this.state.submitted === true) {
            return (
                <form id="order">
                    <div>
                    {/*<Summary state={this.state}></Summary>*/}
                    </div>
                </form>
            )
        }
    }
}

export default Orderform;