
import React from 'react';
import { Card } from 'reactstrap';

const ProductList = ({ProductList=[]}) => {
    return (
        <div>
{ProductList.map(data => {
    <Card 
    imgsrc={data.imgsrc}
    brand = {data.brand} 
    detail = {data.detail}
    price={data.price}/>
})}
            
        </div>
    );
};

export default ProductList;