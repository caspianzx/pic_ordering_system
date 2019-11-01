/* Core imports */
import React, { Component } from 'react';

class InfoFieldset extends Component {
  render () {
    return (
      <fieldset id="basic">
        <h2>Your Order:</h2>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input onChange={this.props.updateForm} type="text" className="form-control" name="lastName" id="lastName" aria-describedby="emailHelp" placeholder="Eg. John"/>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input onChange={this.props.updateForm} type="text" className="form-control" name="firstName" id="firstName" placeholder="Eg. Baracuda"/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input onChange={this.props.updateForm} type="text" className="form-control" name="phone" id="phone" placeholder="+65 123456"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input onChange={this.props.updateForm} type="email" className="form-control" name="email" id="email" placeholder="Eg. you@example.com"/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input onChange={this.props.updateForm} type="text" className="form-control" name="address" id="address" placeholder="Eg. 123 Acme Street"/>
        </div>
      </fieldset>
    );
  }
}

export default InfoFieldset;