import data from '../Card/data';
import React from 'react';
import MapCard from '../Card/MapCard';


const product = () => {
    return (
        <React.Fragment>
            <div className="displayCard">{data.map(MapCard)}</div>
        </React.Fragment>
    )
}
export default product;