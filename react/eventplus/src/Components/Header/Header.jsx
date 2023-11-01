import React from 'react';
import './Header.css'
import Container from '../Container/Container';
import Navbar from '../NavBar/Navbar';
import PerfilUsuario from '../PerfilUsuario/PerfilUsuario';

import menubar from '../../Assets/Images/images/menubar.png';


const Header = () => {
    return (
       <header className='headerpage'>
         <Container>
            <div className='header-flex'>
               <img 

               src={menubar} 
               alt='imagem menu de barras. Serve para exibir ou esconder o menu'/>

               <Navbar/>
               <PerfilUsuario/>
            </div>
         </Container>
       </header>
    );
};

export default Header;