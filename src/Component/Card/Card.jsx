import React from 'react';
import './card.css';

import { useDispatch, useSelector } from 'react-redux';

const Card = (props) => {
    const showState = useSelector(state => state.showToggler);
    const dispetch = useDispatch();

    const onToggleHandler = () => {
        dispetch({ type: 'show' });
    }

    return (
        <React.Fragment>
            <div className="card" onMouseOver={onToggleHandler}>
                <img className="card-img-top" src={props.imgsrc} alt="Cant load" />
                <div className="card-body">
                    <h6 className="card-text">{props.brand}</h6>
                    <p className="card-title">{props.detail}</p>
                    {showState &&
                        <div><div className="availabilityMessage"> Sizes: XS,S,M,L,XL,XXL </div><br/>
                            <div className="displayButtons">
                                <button className="button-styling">Add To Cart</button>
                            </div></div>}
                    <p className="card-price">{props.price}</p>



                </div>
            </div>
        </React.Fragment>
    )
};

export default Card;