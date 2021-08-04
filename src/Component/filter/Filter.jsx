import React from 'react';
import './filter.css';

const Filter = () => {
const showAllItemHandler = () => {}
const showTshirtHandler = () => {}


    return (
        <React.Fragment>
            <div className="flexContainer">
                <div className="filters">
                <b>  FILTERS: </b>
                    <button type="button" className="btn btn-outline-secondary btn-sm" onClick={showAllItemHandler}>All Products</button>
                    <button type="button" className="btn btn-outline-secondary btn-sm" onClick={showTshirtHandler}>Tee Shirt</button>
                    <button type="button" className="btn btn-outline-secondary btn-sm">Denim</button>
                    <button type="button" className="btn btn-outline-secondary btn-sm">Sweatshirts</button>
                    <button type="button" className="btn btn-outline-secondary btn-sm">Polo Tees</button>
                    <button type="button" className="btn btn-outline-secondary btn-sm"> Shirt </button>
                </div>

                <div className="sortBy">
                    <button type="button" class="btn btn-outline-secondary dropdown-toggle btn-sm" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">sort By : High To Low</button>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" >High To Low</a>
                                    <a className="dropdown-item" >Low To High</a>
                                    <a className="dropdown-item" >Between 5000-2000</a>
                                </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Filter;