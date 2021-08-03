import React from 'react';
import './card.css';

const Card = (props) => {
    return(
        <React.Fragment>
             <div className="card" >
                <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
                <div className="card-body">
                <h6 className="card-text">{props.brand}</h6>
                <p className="card-title">{props.detail}</p>   
                <p className="card-price">{props.price}</p>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Card;