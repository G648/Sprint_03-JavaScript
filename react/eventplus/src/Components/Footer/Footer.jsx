import React from 'react';
import "./Footer.css"

const Footer = ({textRights = "Escola SENAI de informática - 2023"}) => {
    return (
        <footer className='footer-page'>
            <p className='footer-page__rights'>{textRights}</p>
        </footer>
        
    );
};

export default Footer;