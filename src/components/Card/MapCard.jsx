import React from 'react';

import Card from './Card';


const MapCard = (value) => {

          return(
           
        <Card
        imgsrc={value.imgsrc}
        key={value.Id}
        brand = {value.brand} 
        category={value.category}
        detail = {value.detail}
        price={value.price}
    />
        
        );


  

};


export default MapCard;
