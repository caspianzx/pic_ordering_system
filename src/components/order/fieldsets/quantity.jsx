/* Core imports */
import React, { Component } from 'react';

class QuantityFieldset extends Component {
  render () {
    return (
      <fieldset id="quantity">
        <div className="form-group">
          <label>Number of copies for #1</label>
          <input onChange={this.props.updateForm} type="number" name="numCopies1" className="form-control"/>
        </div>
        <div className="form-group">
          <label>Number of copies for #2</label>
          <input onChange={this.props.updateForm} type="number" name="numCopies2" className="form-control"/>
        </div>
        <div className="form-group">
          <label>Number of copies for #3</label>
          <input onChange={this.props.updateForm} type="number" name="numCopies3" className="form-control"/>
        </div>
        <div className="form-group">
          <label>Number of copies for #4</label>
          <input onChange={this.props.updateForm} type="number" name="numCopies4" className="form-control"/>
        </div>
        <div className="form-group">
          <label>Number of copies for #5</label>
          <input onChange={this.props.updateForm} type="number" name="numCopies5" className="form-control"/>
        </div>
        <button onClick={(e)=> this.props.validateForm(e)} type="button" className="btn btn-success">Add To Cart</button>
      </fieldset>
    );
  }
}

export default QuantityFieldset;