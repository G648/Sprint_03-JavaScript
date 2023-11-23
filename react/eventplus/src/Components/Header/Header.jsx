import React, { useState } from 'react';
import "./Header.css";
import Container from "../Container/Container";
import Nav from '../Nav/Nav';
import PerfilUsuario from '../PerfilUsuario/PerfilUsuario';
import menubar from "../../Assets/images/menubar.png";

const Header = () => {

    //state do menu = exibir/esconder menu
    const [exibeNavbar, setExibeNavbar] = useState(false);

    return (
        <header className='headerpage'>
            <Container>
                <div className="header-flex">
                    <img
                        className='headerpage__menubar'
                        src={menubar}
                        alt="Imagem menu de barras. Serve para exibir ou esconder o menu no smartphone."
                        onClick={() => {setExibeNavbar(true)}}  
                    />


                    {/*  Nome comum= {nome função} */}
                    <Nav exibeNavbar={exibeNavbar} setExibeNavbar={setExibeNavbar} />
                    <PerfilUsuario />
                </div>
            </Container>
        </header>

    );
};

export default Header;