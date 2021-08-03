import React from 'react';
import Card from './Card';


const MapCard = (value) => {
   return( <Card 
        imgsrc={value.imgsrc}
        brand = {value.brand} 
        detail = {value.detail}
        price={value.price}
    /> );


};

export default MapCard;