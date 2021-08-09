import React from 'react';

import Card from '../filter/Card';


const MapCard = (value) => {
  // console.log("testing",value.imgsrc)
          return(
           
        <Card
        imgsrc={value.imgsrc}
        // key={value.Id}
        brand = {value.brand} 
        category={value.category}
        detail = {value.detail}
        price={value.price}
    />
        
        );


  

};


export default MapCard;
