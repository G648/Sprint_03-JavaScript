import React, { useContext } from 'react';
import CardEvento from '../../components/CardEventos/CardEvento.';
import Container from '../../components/container/container';
import Title from '../../components/Title/Title';
import { ThemeContext } from '../../context/ThemeContext';


const ProdutoPage = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div>
            <Title text="World Skills">  </Title>
            <span>{theme}</span>

            <Container>

                <CardEvento tituloEvento="Arturzete Campeão" subEvento="Mostrando aqui que o artur vai ser campeão mundial e não vai se esquecer dos de verdade LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM" />
                <CardEvento tituloEvento="Arturzete Campeão" subEvento="Mostrando aqui que o artur vai ser campeão mundial e não vai se esquecer dos de verdade LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM" />
                <CardEvento tituloEvento="Arturzete Campeão" subEvento="Mostrando aqui que o artur vai ser campeão mundial e não vai se esquecer dos de verdade LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM" />
                <CardEvento tituloEvento="Arturzete Campeão" subEvento="Mostrando aqui que o artur vai ser campeão mundial e não vai se esquecer dos de verdade LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM" />
                <CardEvento tituloEvento="Arturzete Campeão" subEvento="Mostrando aqui que o artur vai ser campeão mundial e não vai se esquecer dos de verdade LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM" />
                <CardEvento tituloEvento="Arturzete Campeão" subEvento="Mostrando aqui que o artur vai ser campeão mundial e não vai se esquecer dos de verdade LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM" />

            </Container>
        </div>
    );

};

export default ProdutoPage;