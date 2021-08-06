import React from 'react';
import './productCount.css';

const ProductCount = (props) => {
// const OnCounting = data.length;
    return (
        <React.Fragment>
            <div className="productCount">
                <p>All Products</p>
                <h6 className="pCount">({props.children} Products)</h6>
            </div>

        </React.Fragment>
    )
}
export default ProductCount;
