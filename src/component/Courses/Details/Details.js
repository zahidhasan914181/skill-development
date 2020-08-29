import React from 'react';
import './Details.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Details = (props) => {
    const {title,quality,price,image,details,trainer} = props.data
    return (
        <div className="element">
            <div>
                <h3>{title}</h3>
                <h5>${price}</h5>
                <button onClick={()=>props.cartHandeler(props.data)} className="btn btn-primary">Enroll Now</button>
            </div>
        </div>
    );
};

export default Details;