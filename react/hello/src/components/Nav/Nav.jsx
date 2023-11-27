import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext';

const Nav = () => {

    const {theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        alert("trocando de tema")

        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <nav>
            <Link to={"/"}>Home</Link> | &nbsp;
            <Link to={"/Produtos"}>Produtos</Link> | &nbsp;
            <Link to={"/Dados"}>Dados</Link> | &nbsp;
            <Link to={"/Meus-pedidos"}>Pedidos</Link> | &nbsp;
            <Link to={"/Login"}>Login</Link>
            <button onClick={toggleTheme}> {theme} </button>
            
        </nav>
    );
};

export default Nav;