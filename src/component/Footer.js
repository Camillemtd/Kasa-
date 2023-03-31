import React from 'react';
import logo from "../assets/logoFooter.png"
import './styleComponent/footer.scss'
const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="logo de l'entreprise Kasa"/>
            <p><i className="fa-regular fa-copyright"></i>2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;