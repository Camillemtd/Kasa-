import React from 'react';
import Header from '../component/Header';
import { Link } from 'react-router-dom';
import "./error.scss"
const Error = () => {
    return (
        <div >
            <Header/>
            <div className='error'>
                <h2>404</h2>
                <p>Oups! La page que <br/> vous demandez n'existe pas.</p>
                <Link to="/home">Retourner sur la page d'acceuil</Link>
            </div>
        </div>
    );
};

export default Error;