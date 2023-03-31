import React from 'react';
import './styleComponent/LocationCard.scss'
const LocationCard = ({cover, title}) => {
    return (
        <div className='cardLocation'>
            <img src={cover} alt={title}/>
            <h3>{title}</h3>
        </div>
    );
};

export default LocationCard;