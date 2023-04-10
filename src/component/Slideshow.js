import React, { useState, useEffect } from 'react';
import './styleComponent/slideshow.scss'

const Slideshow = ({pictures}) => {
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0)
    function previousPicture(){
        setCurrentPictureIndex((currentPictureIndex - 1 + pictures.length) % pictures.length)
    }
    function nextPicture(){
        setCurrentPictureIndex((currentPictureIndex + 1) % pictures.length)
    }
    useEffect(() => {
        if (pictures.length < 2){
          const singlePicture = document.querySelectorAll('.hidden');
          
          if(singlePicture){
              singlePicture.forEach(e => {
                e.style.visibility = 'hidden'
              })
          }
        }
      }, []);
      

    return (
        <div className='carousel'>
            <i className="fa-solid fa-chevron-left hidden" onClick={previousPicture}></i>
            <img src={pictures[currentPictureIndex]} alt="logement"></img>
            <i className="fa-solid fa-chevron-right hidden" onClick={nextPicture}></i>
            <p className='hidden'>{currentPictureIndex + 1}/{pictures.length}</p>
        </div>
    );
};

export default Slideshow;