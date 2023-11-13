import React, { useState } from 'react';
import './TiposEvento.css'
import Titulo from '../../Components/Titulo/Titulo';
import Main from '../../Components/Main/Main';
import Container from '../../Components/Container/Container';
import typeEventImage from '../../assets/icons/tipo-evento.svg'
import ImageIlustrator from '../../Components/ImageIlustrator/ImageIlustrator';

const TiposEvento = () => {

  const [frmEdit, setFrmEdit] = useState(false)

  function handleSubmit() {
    alert ('bora cadastrar')
  }

  function handleUpdate() {
    alert('bora editar')
  }

  return (
    <>

      <Main>
        <section className='cadastro-evento-section'>
          <Container>
            <Titulo titleText={"Tipos de evento"} />
            <div className='cadastro-evento__box'>
              {/* se o programador não declarar uma imagem, o programa irá pegar uma imagem default definida no imageIllustrator */}
              <ImageIlustrator imageRender={typeEventImage} />

              {/* outro jeito de fazer a condicional */}
              {/* <ImageIlustrator imageRender={ImageIlustrator.imageRender === '' ? defaultImage : typeEventImage} /> */}
              <form
                action=""
                className='ftipo-evento'
                onSubmit={frmEdit ? handleUpdate : handleSubmit}
              >
                {/* cadastrar ou editar o formulário */}
                {
                  !frmEdit ? (<p>tela de cadastro</p>) : (<p>tela de edição</p>)
                }

              </form>
            </div>
          </Container>
        </section>
      </Main>

    </>
  );
};

export default TiposEvento;