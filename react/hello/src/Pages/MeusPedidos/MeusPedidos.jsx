import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
// import Title from '../../components/Title/Title';

const MeusPedidos = () => {

    const{theme, produtos} = useContext(ThemeContext)

    return (
        <div>
            {/* <Title text= "Meus Pedidos"></Title> */}
            <h1>Dados importantes</h1>
            <span>{theme}</span>

            {produtos.map( (p) => {
                return(
                    <>
                    <div>
                        {p.idProduto} |&nbsp;
                        {p.descricao} |&nbsp;
                        {p.preco} |&nbsp;
                        {p.promo ? "sim" : "não"} 
                    </div>
                    </>
                   
                );
            })}
        </div>
    );
};

export default MeusPedidos;