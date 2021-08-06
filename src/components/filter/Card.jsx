import React, { useState } from 'react';
import './card.css';



import { useDispatch, useSelector } from 'react-redux';

const Card = (props) => {
    console.log("image src:-", props.category);
    const showState = useSelector(state => state.showToggler);
    const [showButton, setShowButton] = useState(false);
    const dispetch = useDispatch();

    const onToggleHandler = () => {
        dispetch({ type: 'show' });
    }
    
    const showAddToCartButton = () => {
        setShowButton(true);
    }

    const AddToCartButtonHandler = () =>{
        
    }

    return (
        <React.Fragment>
            <div className="card" >
            <div className="card-body" >
                <img className="card-img-top" src={props.imgsrc} alt="Cant load" />
              
                    <h6 className="card-text" onMouseOver={onToggleHandler}>{props.brand}</h6>
                    <p className="category">{props.category}</p>
                    <p className="card-title">{props.detail}</p>
                    
                    {showState &&
                    <div>
                         {showButton ? <input type="button" value="Add to Cart" onClick={AddToCartButtonHandler}/> :
                       <div> <p>Select size</p>
                        <div className="size">
                        <input type="button" value="38" onClick={showAddToCartButton}/>
                        <input type="button" value="39" onClick={showAddToCartButton}/>
                        <input type="button" value="40" onClick={showAddToCartButton}/>
                        <input type="button" value="42" onClick={showAddToCartButton}/>
                        <input type="button" value="44" onClick={showAddToCartButton}/></div></div>}
                     <div className="availabilityMessage"> Sizes: XS,S,M,L,XL,XXL </div></div>}
                    <p className="card-price">{props.price}</p>



                </div>
            </div>
        </React.Fragment>
    )
};

export default Card;