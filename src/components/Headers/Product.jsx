import data from '../Card/data';
import React from 'react';
import MapCard from '../Card/MapCard';
import { text } from '../filter/Filter';


const Product = () => {
    console.log("data is:-",data.length);
    console.log(text)
    return (
        <React.Fragment>
            <div className="displayCard">{text.map(MapCard)}</div>  
        </React.Fragment>
    )
}
export default Product;