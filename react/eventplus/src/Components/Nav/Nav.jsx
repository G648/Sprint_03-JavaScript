import React from 'react';
import logoMobile from "../../Assets/icons/logo-white.svg";
import logoDesktop from "../../Assets/icons/logo-pink.svg";
import { Link } from 'react-router-dom'
import "./Nav.css"

const Nav = ({ exibeNavbar, setExibeNavbar}) => {

    console.log(`Exibe o menu ? ${exibeNavbar}`);
    return (
        <nav className={`navbar ${exibeNavbar ? "exibeNavbar"  : "" }`}>
            <span onClick={() => {setExibeNavbar(false)}} className='navbar__close' >x</span>
            
            <Link to="/" className='eventlogo'>
                <img
                className='eventlogo__logo-image' 
                src={window.innerWidth >= 992 ? logoDesktop : logoMobile}
                alt="Event Plus Logo"/>
            </Link>

            <div className='navbar__items-box'>
                <Link to="/" className='navbar__item'>Home</Link>
                <Link to="/tipos-evento" className='navbar__item'>Tipos de Evento</Link>
                <Link to="/teste" className='navbar__item'>Teste</Link>
                <Link to="/eventos" className='navbar__item'>Eventos</Link>
                <Link to="/login" className='navbar__item'>Login</Link>

            </div>
        </nav>
    );
};

export default Nav;