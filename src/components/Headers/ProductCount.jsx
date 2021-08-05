import React from 'react';
import './productCount.css';
import data from '../Card/data';


const ProductCount = () => {
const OnCounting = data.length;
    return (
        <React.Fragment>
            <div className="productCount">
                <p>All Products</p>
                <h6 className="pCount">({OnCounting} Products)</h6>
            </div>

        </React.Fragment>
    )
}
export default ProductCount;
