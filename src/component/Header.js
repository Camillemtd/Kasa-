import React from 'react';
import { Link } from 'react-router-dom';
import "./styleComponent/header.scss"
const Header = () => {
    
    return (
        <header className='header'>
            <h1>KASA</h1>
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