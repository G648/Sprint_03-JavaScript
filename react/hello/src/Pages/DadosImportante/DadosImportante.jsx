import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
// import Title from '../../components/Title/Title';

const DadosImportante = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div>
            {/* <Title text="Dados"> </Title> */}

            <h1>Página de dados</h1>
            <span>{theme}</span>
        </div>
    );
};

export default DadosImportante;