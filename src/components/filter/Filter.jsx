import React, { useState } from 'react';
import Product from '../Headers/Product';
import './filter.css';


const Filter = (props) => {
    const [allItem,setAllItem]= useState(false);
    const showAllItemHandler = () => {
            setAllItem(true);
       
      
     }
    const showTshirtHandler = () => {}
    const showDenimHandler =() => {}
    const showSsHandler =() =>{}
    const showTeesHandler = () => {}
    const showShirtHandler = () => {}

    return (
        <React.Fragment>
            <div className="flexContainer">
                <div >
                    <p className="filters">  FILTERS: </p>
                    <button type="button" className="btn" onClick={showAllItemHandler}>All Products</button>
                    {allItem && <Product/>}
                    <button type="button" className="btn1" onClick={showTshirtHandler}>Tee Shirt</button>
                    
                    <button type="button" className="btn2" onClick={showDenimHandler}>Denim</button>
                    <button type="button" className="btn3" onClick={showSsHandler}>Sweatshirts</button>
                    <button type="button" className="btn4" onClick={showTeesHandler}>Polo Tees</button>
                    <button type="button" className="btn5" onClick={showShirtHandler}> Shirt </button>
               
                    <button type="button" class="btn6" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">sort By : High To Low</button>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" >High To Low</a>
                        <a className="dropdown-item" >Low To High</a>
                        <a className="dropdown-item" >Between 5000-2000</a>
                    </div>
                </div>
            </div>
            <p className="gap"></p>
        </React.Fragment>
    )
};

export default Filter;