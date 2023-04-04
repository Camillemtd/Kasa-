import React, { useState } from 'react';
import { Link, NavLink} from 'react-router-dom';
import "./styleComponent/header.scss"
import logo from '../assets/logo.png'
const Header = () => {
    
      
    return (
        <header className='header'>
            <img src={logo} alt="logo de l'entreprise Kasa" className='logo'/>
            <nav>
                <ul>
                    <li><NavLink to="/home" id='lien1' activeclassname="active" >Acceuil</NavLink></li>
                    <li><NavLink to="/about" id='lien2' activeclassname="active">À propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;