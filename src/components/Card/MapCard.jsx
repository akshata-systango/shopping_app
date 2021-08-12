import React, { useState, useEffect } from 'react';
// import { useEffect } from 'react';
import Card from '../filter/Card';



const MapCard = (value) => {
  return (<Card
    imgsrc={value.imgsrc}
    key={value.id}
    id={value.id}
    brand={value.brand}
    category={value.category}
    detail={value.detail}
    price={value.price}
  />)



};


export default MapCard;
