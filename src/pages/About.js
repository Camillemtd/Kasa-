import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import aboutImg from '../assets/about.png'
import './stylesPages/about.scss'
import aboutdata from '../data/aboutdata.js'
import AboutCollapse from '../component/AboutCollapse';
const About = () => {
    

    return (
        <>
            <Header/>
            <div className='about'>
                <div className='imgContener'>
                    <img src={aboutImg} alt='montagne' className='aboutImg'/>
                </div>
                <article className="aboutContainer">
                    {aboutdata.map((e, index) => {
                        return (
                            <AboutCollapse key={index} title={e.title} description={e.description}/>
                        )
                    })
                    }
                </article>
            </div>
            <Footer/>
        </>
    );
};

export default About;