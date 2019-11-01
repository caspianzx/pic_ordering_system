/* Core imports */
import React, { Component } from 'react';

class QuantityFieldset extends Component {


    render () {
        //using .map function to create multiple options
        const copies = [0,1,2,3,4,5,6,7,8,9,10];
        const options = copies.map(i => {
            return <option>{i}</option>
        })

        return (
            <fieldset id="quantity">
                <div className="form-group">
                    <label>Number of copies for #1</label>
                    <select onChange={this.props.updateForm} type="number" name="numCopies1" className="form-control">
                        {options}
                    </select>
                </div>
                <div className="form-group">
                    <label>Number of copies for #2</label>
                    <select onChange={this.props.updateForm} type="number" name="numCopies2" className="form-control">
                        {options}
                    </select>
                </div>
                <div className="form-group">
                    <label>Number of copies for #3</label>
                    <select onChange={this.props.updateForm} type="number" name="numCopies3" className="form-control">
                    {options}
                    </select>
                </div>
                <div className="form-group">
                    <label>Number of copies for #4</label>
                    <select onChange={this.props.updateForm} type="number" name="numCopies4" className="form-control">
                        {options}
                    </select>
                </div>

                <div className="form-group">
                    <label>Number of copies for #5</label>
                     <select onChange={this.props.updateForm} type="number" name="numCopies5" className="form-control">
                        {options}
                     </select>
                </div>
            <button onClick={(event)=> this.props.validateForm(event)} type="button" className="btn btn-success">Add To Cart</button>
          </fieldset>
        );
    }
}

export default QuantityFieldset;