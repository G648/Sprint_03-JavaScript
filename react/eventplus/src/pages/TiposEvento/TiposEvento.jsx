import React from 'react';
import './TiposEvento.css'
import Titulo from '../../Components/Titulo/Titulo';
import Main from '../../Components/Main/Main';
import Container from '../../Components/Container/Container';

const TiposEvento = () => {
  return (
    <>

      <Main>
        <section className='cadastro-evento-section'>
          <Container>
            <div className='cadastro-evento-box'>
                <Titulo titleText={"Tipos de evento"} />
                <ImageIlustrator  />
                <form action="" className='ftipo-evento'>
                  <p>Formulário será criado aqui</p>
                </form>
            </div>
          </Container>
        </section>
      </Main>

    </>
  );
};

export default TiposEvento;