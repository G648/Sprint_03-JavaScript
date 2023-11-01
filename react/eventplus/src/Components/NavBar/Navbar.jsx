import React from 'react';
import './Navbar.css'

import menubar from '../../Assets/Images/images/menubar.png';
import logowhite from '../../Assets/Images/images/logo-white.svg'
import logopink from '../../Assets/Images/images/logo-pink.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='navbar__close'>X</span>

            <a href="" className='eventologo'>
                <img src={menubar} alt="" />
            </a>

            <div className="navbar__items-box">
                <a href="">Home</a>
                <a href="">Tipos de Evento</a>
                <a href="">Usuários</a>
            </div>
        </div>
    );
};

export default Navbar;