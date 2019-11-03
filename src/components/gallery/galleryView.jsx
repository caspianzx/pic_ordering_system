/* Core imports */
import React, { Component } from 'react';
import './Gallery.css'
import img1 from '../../assets/gallery/2.jpg'

class GalleryView extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
          /* Form options */
          index : 0,
          /* Model used for navigation between fieldsets */
          submitted: false
        }
    }

    //click functions
    render() {
        const copies = [0,1,2,3,4,5,6,7,8,9,10];
        const options = copies.map(i => {
            return <option>{parseInt(i)}</option>
        });

        return (
            <div className = "galleryForm">
                <img src ={img1}  id="galleryimg" />
                <div id="selectNo">
                    <label>Number of copies</label>
                    <select className="form-control">
                            {options}
                    </select>
                </div>
                <div className="left">left</div>
                <div className="right">right</div>
            </div>
            );
    }
}

export default GalleryView