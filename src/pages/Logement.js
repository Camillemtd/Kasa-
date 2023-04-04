import React from 'react';
import { useLocation } from 'react-router-dom';
import Description from '../component/Description';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Slideshow from '../component/Slideshow';
import TagLogement from '../component/TagLogement';
import Équipements from '../component/Équipements'
import './stylesPages/logement.scss'

const Logement = () => {
   let { state } = useLocation()

   const maxRating = 5;
   const getStarClass = (rating, index) => {
    if (index < rating) {
        return 'starRed'
    } else {
        return 'starGrey'
    }
   }
   
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <span key={i} className={getStarClass(state.some.rating, i)}>
          <i className="fa-solid fa-star"></i>
        </span>
      );
    }
    
  

   
    return (
        <div className='logement'>
            
            <Header/>
            <div className='logementMargin'>
            <Slideshow pictures={state.some.pictures}/>
            <div className='logementWrapper'>
                <div className='locationWrapper'>
                    
                    <h2>{state.some.title}</h2>
                    <p className='location'>{state.some.location}</p>
                    <TagLogement tag={state.some.tags}/>
                </div>
                <div className='ratingWrapper'>
                    <div className='rating'>{stars}</div>
                    <div className='hostWrapper'>
                    <p className='nameHost'>{state.some.host.name}</p>
                    <img src={state.some.host.picture} className="pictureHost"/>
                    </div>
                </div>
               
            </div>
            <div className='collapseWrapper'>
                    <Description description={state.some.description}/>
                    <Équipements equipments={state.some.equipments}/>
                </div>

                </div>
                
            
            <Footer/>
        </div>
    );
};

export default Logement;