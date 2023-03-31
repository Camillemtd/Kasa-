import React from 'react';
import Header from '../component/Header';
import img from "../assets/home.png"
import "./stylesPages/home.scss"
import datakasa from '../data/datakasa.json'
import LocationCard from '../component/LocationCard';
import Footer from '../component/Footer';
const Home = () => {
    
    
        
              
    return (
        <>
            <Header/>
            <main className='home'>
                <div className='containerImgHome'>
                    <img src={img} alt="falaise" className='imgHome' />
                    <h2>Chez vous, partout et ailleurs</h2>
                </div>
                <article className='cardContainer'>
                    {datakasa.map(e => {
                        return(
                            <LocationCard cover={e.cover} title={e.title} key={e.id}/>
                        )
                    })}
                </article>
            </main>
            <Footer/>
        </>
    );
};

export default Home;