import React from 'react';
import { Link } from 'react-router-dom';
import "./styleComponent/header.scss"
import logo from '../assets/logo.png'
const Header = () => {
    
    return (
        <header className='header'>
            <img src={logo} alt="logo de l'entreprise Kasa" className='logo'/>
            <nav>
                <ul>
                    <li><Link to="/home" >Acceuil</Link></li>
                    <li><Link to="/about" >À propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;