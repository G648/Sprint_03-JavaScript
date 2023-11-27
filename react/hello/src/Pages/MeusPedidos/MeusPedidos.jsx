import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
// import Title from '../../components/Title/Title';

const MeusPedidos = () => {

    const{theme} = useContext(ThemeContext)

    return (
        <div>
            {/* <Title text= "Meus Pedidos"></Title> */}
            <h1>Dados importantes</h1>
            <span>{theme}</span>
        </div>
    );
};

export default MeusPedidos;