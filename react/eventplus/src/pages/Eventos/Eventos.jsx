import React from 'react';
import Titulo from "../../Components/Titulo/Titulo"
import Container from '../../Components/Container/Container';
import ImageIlustrator from '../../Components/ImageIlustrator/ImageIlustrator';
import eventoImage from '../../assets/icons/evento.svg'

const Eventos = () => {
    return (
        <div>

            <Container>

                <Titulo titleText={"Página de Eventos"} color=' #B51D44' />

               <ImageIlustrator imageRender={eventoImage}/>

            </Container>
        </div>
    );
};

export default Eventos;