import React, { useEffect, useState } from 'react';
import './TiposEvento.css'
import './TableTp/TableTp.css'

import Titulo from '../../Components/Titulo/Titulo';
import Main from '../../Components/Main/Main';
import Container from '../../Components/Container/Container';
import typeEventImage from '../../Assets/icons/tipo-evento.svg'
import ImageIlustrator from '../../Components/ImageIlustrator/ImageIlustrator';
import Spinner from '../../Components/Spinner/Spinner'
import { Button, Input } from '../../Components/FormComponents/FormComponents';
import TableTp from './TableTp/TableTp';
import Notification from '../../Components/Notification/Notification';

import api, { getTitleEventsResources, postTitleEventsResources } from '../../Services/Service';


const TiposEvento = () => {

  //states
  const [frmEdit, setFrmEdit] = useState(false) //está em modo edição?
  const [titulo, setTitulo] = useState("")
  const [idEvento, setIdEvento] = useState(null)
  const [tiposEvento, setTiposEventos] = useState([]) //array
  const [notifyUser, setNotifyUser] = useState(); //componente notification
  const [showSpinner, setShowSpinner] = useState(false) //spinner loanding

  //usado para chamar a API
  useEffect(() => {
    async function loadEventsType() {
      setShowSpinner(true);
      try {

        const retorno = await api.get(getTitleEventsResources);
        setTiposEventos(retorno.data)
        console.log(retorno.data);

      } catch (error) {
        setNotifyUser({
          titleNote: "API - Error",
          textNote: `Erro na conexão com o backend`,
          imgIcon: "danger",
          imgAlt:
            "imagem de ilustração de erro. Moça segurando um balão com símbolo de confirmação OK",
          showMessage: true
        });

        console.log(error);
      }
      setShowSpinner(false);
    }

    loadEventsType();
  }, [])


  function notificationMessage() {
    setNotifyUser({
      titleNote: "Sucesso",
      textNote: `evento cadastrado com sucesso`,
      imgIcon: "success",
      imgAlt:
        "imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação OK",
      showMessage: true
    });
  }

  //definindo a função async para nos conectarmos na API
  async function handleSubmit(e) {
    e.preventDefault();
    if (titulo.trim().length < 3) {

      setNotifyUser({
        titleNote: "aviso",
        textNote: `o titulo deve ter pelo menos 3 caracteres`,
        imgIcon: "warning",
        imgAlt:
          "imagem de ilustração de warning. Rapaz segurando um x",
        showMessage: true
      });

      return;
    }


    try {
      const retorno = await api.post(postTitleEventsResources, {
        //propriedade do objeto
        titulo: titulo
      });

      setNotifyUser({
        titleNote: "Sucesso",
        textNote: `evento cadastrado com sucesso`,
        imgIcon: "success",
        imgAlt:
          "imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação OK",
        showMessage: true
      });

      setTitulo('')

      //atualiza a tela depois de cadastrar um novo tipo de evento
      const buscaEvento = await api.get(getTitleEventsResources);
      setTiposEventos(buscaEvento.data);

    } catch (error) {
      setNotifyUser({
        titleNote: "Error",
        textNote: `Erro ao cadastrar um evento - verifique a internet`,
        imgIcon: "warning",
        imgAlt:
          "imagem de ilustração de warning. Rapaz segurando um x",
        showMessage: true
      });
    }
  }

  // ************************EDITAR O CADASTRO DOS TIPOS EVENTOS********************************
  async function handleUpdate(e) {
    e.preventDefault();
    // alert(`vamos editar o evento de id ${idtipoevento}`)

    setShowSpinner(true)
    try {

      //demos que atualizar na API
      const retorno = await api.put(getTitleEventsResources + "/" + idEvento, { //put é similar ao post
        titulo: titulo
      }) //passar o id que está no state


      if (retorno.status == 204) {

        //notificar o usuário
        setNotifyUser({
          titleNote: "Sucesso",
          textNote: `evento atualizado com sucesso`,
          imgIcon: "success",
          imgAlt:
            "imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação OK",
          showMessage: true
        });

      }

      // atualizar os dados na tela
      const buscaEvento = await api.get(getTitleEventsResources);
      setTiposEventos(buscaEvento.data);

      editActionAbort();

    } catch (error) {
      console.log(error);

      //notificar o erro ao usuário
      setNotifyUser({
        titleNote: "Error",
        textNote: `Erro ao atualizar um evento - verifique a internet`,
        imgIcon: "warning",
        imgAlt:
          "imagem de ilustração de warning. Rapaz segurando um x",
        showMessage: true
      });

    }

    setShowSpinner(false)

  }


  //apaga o tipo de evento na api 
  async function handleDelete(idtipoevento) {
    alert(`vamos apagar o evento de id ${idtipoevento}`)

    //função nativa do js = confirm
    if (!window.confirm("Voce realmente deseja cancelar este evento?")) {
      return;
    }

    setShowSpinner(true)

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

    setShowSpinner(false)
  }


  //cancela a tela/ação de edição (volta para o form de cadastro)
  function editActionAbort() {

    setFrmEdit(false)

    setIdEvento(null);

    setTitulo("");

  }


  // mostra o formulário de edição
  async function showUpdateForm(idtipoevento) {

    setIdEvento(idtipoevento); //preenche o id do evento para poder atualizar

    setFrmEdit(true)

    setShowSpinner(true)

    try {
      const retorno = await api.get(`${getTitleEventsResources}/${idtipoevento}`)

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

    setShowSpinner(false)

  }

  return (
    <>
      {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}

      {/* Spinner - feito com position */}
      {showSpinner ? <Spinner /> : null}

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
                      />
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
                        <span>{idEvento}</span>
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