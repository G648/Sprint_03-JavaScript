import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <header>
        <nav>
           <Link to="/"> Home </Link>
           <Link to="/Evento"> Evento </Link>
           <Link to="/TiposEvento"> Tipos Evento </Link>
           <Link to="/Login"> Login </Link>
           <Link to="/Teste"> Teste</Link>
        </nav>
       </header>
    );
};

export default Header;