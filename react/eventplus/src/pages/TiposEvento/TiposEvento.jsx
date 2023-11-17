import React, { useEffect, useState } from 'react';
import './TiposEvento.css'
import './TableTp/TableTp.css'

import Titulo from '../../Components/Titulo/Titulo';
import Main from '../../Components/Main/Main';
import Container from '../../Components/Container/Container';
import typeEventImage from '../../assets/icons/tipo-evento.svg'
import ImageIlustrator from '../../Components/ImageIlustrator/ImageIlustrator';
import { Button, Input } from '../../Components/FormComponents/FormComponents';
import TableTp from './TableTp/TableTp';
import Notification from '../../Components/Notification/Notification';

import api, { getTitleEventsResources, postTitleEventsResources } from '../../Services/Service';


const TiposEvento = () => {

  //states
  const [frmEdit, setFrmEdit] = useState(false)
  const [titulo, setTitulo] = useState("")
  const [tiposEvento, setTiposEventos] = useState([])
  const [notifyUser, setNotifyUser] = useState();

  //usado para chamar a API
  useEffect(() => {
    async function loadEventsType() {
      try {

        const retorno = await api.get(getTitleEventsResources);
        setTiposEventos(retorno.data)
        console.log(retorno.data);

      } catch (error) {
        console.log("Deu ruim na API");
        console.log(error);
      }
    }

    loadEventsType();
  }, [])


  function notificationMessage() {
    setNotifyUser({
      titleNote: "Sucesso",
      textNote: `evento cadastrado com sucesso`,
      imgIcon: "sucsess",
      imgAlt:
        "imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação OK",
      showMessage: true
    });
  }

  //definindo a função async para nos conectarmos na API
  async function handleSubmit(e) {
    e.preventDefault();
    if (titulo.trim().length < 3) {

      alert('O titulo deve conter pelo menos 3 caracteres')
    }


    try {
      const retorno = await api.post(postTitleEventsResources, {
        //propriedade do objeto
        titulo: titulo
      });
      alert("cadastrado com sucesso!")

      setTitulo('')

    } catch (error) {
      alert("deu ruim na API")
    }
  }

  // ************************EDITAR O CADASTRO DOS TIPOS EVENTOS********************************
  async function handleUpdate(e) {
    e.preventDefault();
    // alert(`vamos editar o evento de id ${idtipoevento}`)

    
  }

  //apaga o tipo de evento na api 
  async function handleDelete(idtipoevento) {
    alert(`vamos apagar o evento de id ${idtipoevento}`)

    //função nativa do js = confirm
    if (!window.confirm("Voce realmente deseja cancelar este evento?")) {
      return;
    }

    try {

      const retorno = await api.delete(`${getTitleEventsResources}/${idtipoevento}`);

      if (retorno.status == 204) {

        // setTiposEventos([tiposEvento]);

        //fazendo nova requisição para atualizar nossa página depois que um item foi removido
        const buscaEventos = await api.get(getTitleEventsResources)

        setTiposEventos(buscaEventos.data);

        setNotifyUser({
          titleNote: "Sucesso",
          textNote: `evento excluído com sucesso`,
          imgIcon: "success",
          imgAlt:
            "imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação OK",
          showMessage: true
        });

      }

    } catch (error) {

      alert("não conseguiu deletar")

    }
  }

  //cancela a tela/ação de edição (volta para o form de cadastro)
  function editActionAbort() {

    setFrmEdit(false)

  }

  // mostra o formulário de edição
  async function showUpdateForm(idtipoevento) {

    setFrmEdit(true)

    try {
      const retorno = await api.put(`${getTitleEventsResources}/${idtipoevento}`)

      setTitulo(retorno.data.titulo)

    } catch (error) {
      setNotifyUser({
        titleNote: "warning",
        textNote: `deu ruim na atualização`,
        imgIcon: "warning",
        imgAlt:
          "imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação OK",
        showMessage: true
      });
      console.log(error);
    }

  }

  return (
    <>
      {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}

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
                  !frmEdit ? (
                    //cadastrar
                    //tag de fragment
                    <>
                      <Input
                        id={"Titulo"}
                        placeholder={"Titulo"}
                        name={"titulo"}
                        type={"text"}
                        required={"required"}
                        value={titulo}
                        manipulationFunction={(e) => {
                          setTitulo(e.target.value)
                        }}

                      />

                      <Button
                        id="button"
                        textButton="Cadastrar"
                        name="cadastrar"
                        type="submit"
                        manipulationFunction={notificationMessage}
                      />
                      {/* <Button
                        id="mágica"
                        textButton="mágica"
                        name="magica"
                        type="button"
                        manipulationFunction={theMagic}
                      /> */}
                    </>
                  )
                    : (
                      <>

                        <Input
                          id={"Atualizar"}
                          placeholder={titulo}
                          name={"atualiza"}
                          type={"text"}
                          required={"required"}
                          value={titulo}
                          manipulationFunction={(e) => {
                            setTitulo(e.target.value)
                          }}
                        />
                        <div className='buttons-editbox '>

                          <Button
                            id="Atualizar"
                            textButton="Atualizar"
                            name="Atualizar"
                            type="submit"
                          />

                          <Button
                            id="Cancela"
                            textButton="Cancelar"
                            name="Cancelar"
                            type="button"
                            manipulationFunction={editActionAbort}
                          />
                        </div>

                      </>

                    )
                }

              </form>
            </div>
          </Container>
        </section>

        <section className="lista-eventos-section">
          <Container>
            <Titulo titleText={"Lista tipos de eventos"} color='white' />

            <TableTp
              dados={tiposEvento}
              fnUpdate={showUpdateForm}
              fnDelete={handleDelete}
            />
          </Container>
        </section>
      </Main>

    </>
  );
};

export default TiposEvento;