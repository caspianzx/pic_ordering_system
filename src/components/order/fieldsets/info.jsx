/* Core imports */
import React, { Component } from 'react';

//Form for basic informations

class InfoFieldset extends React.Component {
    render () {
        return (
            <fieldset id="basic">
                <h2 className="text-center">Your Order:</h2>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={this.props.updateForm} type="text" className="form-control" name="lastName" id="lastName" aria-describedby="emailHelp" placeholder="Eg. Caspian"/>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input onChange={this.props.updateForm} type="text" className="form-control" name="firstName" id="firstName" placeholder="Eg. Ng"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <input onChange={this.props.updateForm} type="text" className="form-control" name="phoneNum" id="phone" placeholder="+65 81250830"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Country</label>
                    <select onChange={this.props.updateForm} type="text" name="country" className="form-control" id="exampleFormControlSelect1">
                        <option>Singapore</option>
                        <option>Hong Kong</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={this.props.updateForm} type="email" className="form-control" name="email" id="email" placeholder="Eg. caspianzx@gmail.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input onChange={this.props.updateForm} type="text" className="form-control" name="address" id="address" placeholder="Eg. Orchard Central"/>
                </div>
            </fieldset>
        );
    }
}

export default InfoFieldset;