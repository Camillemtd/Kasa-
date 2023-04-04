import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import img from "../assets/home.png"
import "./stylesPages/home.scss"
import datakasa from '../data/datakasa.json'
import LocationCard from '../component/LocationCard';
import Footer from '../component/Footer';
const Home = () => {
    
    
        
              
    return (
        <div className='homeWrapper'>
            <Header/>
            <main className='home'>
                <div className='containerImgHome'>
                    <img src={img} alt="falaise" className='imgHome' />
                    <h2>Chez vous, partout et ailleurs</h2>
                </div>
                <article className='cardContainer'>
                    {datakasa.map(e => {
                        return(
                           <Link to="/logement" state={{some : e }}  key={e.id}> <LocationCard cover={e.cover} title={e.title} key={e.id}/></Link>
                        )
                    })}
                </article>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;