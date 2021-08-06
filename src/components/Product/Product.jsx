import data from '../../constants/data';
import React from 'react';


const Product = (props) => {
    console.log("data is:-",data.length);
    
   
    return (
        <React.Fragment>
            <div className="displayCard">{props.children}</div>  
        </React.Fragment>
    )
}
export default Product;