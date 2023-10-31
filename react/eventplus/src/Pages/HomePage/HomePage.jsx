import React from 'react';
import Container from '../../Components/Container/Container';
import CardEvento from '../../Components/CardEvento/CardEvento';
import Titulo from '../../Components/Titulo/Titulo';
import Header from '../../Components/Header/Header';

const HomePage = () => {
    return (
        <div>
            <Titulo titulo='Fazendo framework'/>

            <Header />

            <Container>

            <CardEvento tituloEvento='Evento bem bacana de CSS' subEvento=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam minus ducimus sit distinctio aut qui molestiae, quis cum omnis sint quaerat consequuntur doloremque, ullam labore non odit facere aspernatur!' />
            <CardEvento tituloEvento='Evento bem bacana de CSS' subEvento=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam minus ducimus sit distinctio aut qui molestiae, quis cum omnis sint quaerat consequuntur doloremque, ullam labore non odit facere aspernatur!'/>
            <CardEvento tituloEvento='Evento bem bacana de CSS'  subEvento=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam minus ducimus sit distinctio aut qui molestiae, quis cum omnis sint quaerat consequuntur doloremque, ullam labore non odit facere aspernatur!'/>
            <CardEvento tituloEvento='Evento bem bacana de CSS'  subEvento=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam minus ducimus sit distinctio aut qui molestiae, quis cum omnis sint quaerat consequuntur doloremque, ullam labore non odit facere aspernatur!'/>
            <CardEvento tituloEvento='Evento bem bacana de CSS'  subEvento=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam minus ducimus sit distinctio aut qui molestiae, quis cum omnis sint quaerat consequuntur doloremque, ullam labore non odit facere aspernatur!'/>
            <CardEvento tituloEvento='Evento bem bacana de CSS'  subEvento=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam minus ducimus sit distinctio aut qui molestiae, quis cum omnis sint quaerat consequuntur doloremque, ullam labore non odit facere aspernatur!'/>

            </Container>
        </div>
    );
};

export default HomePage;