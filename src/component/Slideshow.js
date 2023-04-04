import React, { useState } from 'react';
import './styleComponent/slideshow.scss'

const Slideshow = ({pictures}) => {
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0)
    function previousPicture(){
        setCurrentPictureIndex((currentPictureIndex - 1 + pictures.length) % pictures.length)
    }
    function nextPicture(){
        setCurrentPictureIndex((currentPictureIndex + 1) % pictures.length)
    }

    return (
        <div className='carousel'>
            <i className="fa-solid fa-chevron-left" onClick={previousPicture}></i>
            <img src={pictures[currentPictureIndex]} alt="logement"></img>
            <i className="fa-solid fa-chevron-right" onClick={nextPicture}></i>
            <p>{currentPictureIndex + 1}/{pictures.length}</p>
        </div>
    );
};

export default Slideshow;