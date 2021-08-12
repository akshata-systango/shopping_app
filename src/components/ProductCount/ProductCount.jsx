import React from 'react';
import './productCount.css';

const ProductCount = (props) => {
// const OnCounting = data.length;
    return (
        <React.Fragment>
            <div className="productCount">
                <p className="productStyling">All Products</p>
                <h6 className="pCount">{props.children}</h6>
            </div>

        </React.Fragment>
    )
}
export default ProductCount;