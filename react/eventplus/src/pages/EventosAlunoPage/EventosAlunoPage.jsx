import React, { useContext, useEffect, useState } from "react";
import MainContent from "../../Components/Main/Main";
import Title from "../../Components/Titulo/Titulo";
import Table from "./TableEvA/TableEvA";
import Container from "../../Components/Container/Container";
import { Select } from "../../Components/FormComponents/FormComponents";
import Spinner from "../../Components/Spinner/Spinner";
import Modal from "../../Components/Modal/Modal";
// import api from "../../Services/Service";
import api, {
  postNextEventsResource,
  postTitleEventsResources,
  getMinhasReservas,
  myEventsResource,
  presencaEventoResource,
  comentariosEvento,
} from "../../Services/Service";

import "./EventosAlunoPage.css";
import { UserContext } from "../../../src/Components/Context/AuthContext";

const EventosAlunoPage = () => {
  // state do menu mobile
  const [exibeNavbar, setExibeNavbar] = useState(false);
  const [eventos, setEventos] = useState([]);
  const [tipoEventos, setTipoEventos] = useState([]); //-> lista de array vinda da api
  // select mocado
  const [quaisEventos, setQuaisEventos] = useState([
    { value: 1, text: "Todos os eventos" },
    { value: 2, text: "Meus eventos" },
  ]);

  const [tipoEvento, setTipoEvento] = useState(1); //código do tipo do Evento escolhido
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // recupera os dados globais do usuário
  const { userData, setUserData } = useContext(UserContext);

  //roda no carregamento da página e sempre  que o tipo de evento for alterado
  useEffect(() => {
    loadEventsType();
  }, [tipoEvento, userData.idUsuario]);


  async function loadEventsType() {
    if (tipoEvento === "1") {
      try {
        const retorno = await api.get(postNextEventsResource);
        const retornoMeusEventos = await api.get(
          `${myEventsResource}/${userData.idUsuario}`
        ); //falta passar aqui o ID
        setEventos(retorno.data);

        const eventosMarcados = verificaPresenca(
          retorno.data,
          retornoMeusEventos.data
        );
        setEventos(eventosMarcados);

        console.clear();
        console.log("todos eventos");
        console.log(retorno.data);

        console.log("meus eventos");
        console.log(retornoMeusEventos.data);

        console.log("eventos marcados");
        console.log(eventosMarcados.data);
      } catch (error) {
        console.log(error);
      }
    } else if (tipoEvento === "2") {
      try {
        const retorno = await api.get(
          `${getMinhasReservas}/${userData.idUsuario}`
        );
        console.log(`${getMinhasReservas}/${userData.idUsuario}`);
        console.log(retorno.data);
        const arrEventos = [];

        retorno.data.forEach((e) => {
          arrEventos.push({ ...e.evento, situacao: e.situacao, idPresencaEvento: e.idPresencaEvento});
        });

        setEventos(arrEventos);
      } catch (error) {
        console.log("Erro na API");
        console.log(error);
      }
    } else {
      setEventos([]);
    }
  }

  const verificaPresenca = (arrAllEvents, eventsUser) => {
    for (let x = 0; x < arrAllEvents.length; x++) {
      for (let i = 0; i < eventsUser.length; i++) {
        if (arrAllEvents[x].idEvento === eventsUser[i].evento.idEvento) {
          arrAllEvents[x].situacao = true;
          arrAllEvents[x].idPresencaEvento = eventsUser[i].idPresencaEvento;
          break;
        }
      }
    }
    return arrAllEvents;
  };

  //criar uma função para trazer os eventos do aluno ou todos os eventos

  // toggle meus eventos ou todos os eventos
  function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
  }

  //ler um comentário - get
  async function loadMyComentary(idComentary) {
    return "????";
  }

  //remove um comentário - delete
  const commentaryRemove = () => {
    alert("Remover o comentário");
  };


  //cadastrar um novo comentário - post
  const postMyComentary = async (idEvento, idUsuario, descricao ) => {
    alert("cadastrar o comentário");

    try {
      const promise = await api.post(comentariosEvento, {
        descricao: descricao,
        exibe: true,
        idUsuario: idUsuario,
        idEvento: idEvento
      })

    } catch (error) {
      
    }
  };
 

  const showHideModal = () => {
    setShowModal(showModal ? false : true);
  };

  async function handleConnect(
    idEvento,
    whatTheFunction,
    idPresencaEvento = null
  ) {
    if (whatTheFunction === "connect") {
      try {
        // {
        //   "situacao": true,
        //   "idUsuario": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        //   "idEvento": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        // }
        const promise = await api.post(presencaEventoResource, {
          situacao: true,
          idUsuario: userData.idUsuario,
          idEvento: idEvento,
        });

        if (promise.status == 201) {
          loadEventsType();
          alert("obrigado por se cadastrar no evento");
        }

        // const todosEventos = await api.get(postNextEventsResource);
        // setEventos(todosEventos.data);
      } catch (error) {
        console.log(error);
      }

      alert("CONECTAR AO EVENTO:" + idEvento);
      return;
    }

    console.log(`
      EVENTOS
      ${whatTheFunction}
      ${idPresencaEvento}
    `);

    //disconnect
    try {
      const unconnect = await api.delete(
    `${presencaEventoResource}/${idPresencaEvento}`
      );
      if ((unconnect.status === 204)) {
        loadEventsType()
        alert("desconectamos do evento")
      }
    } catch (error) {
      console.log("error ao desconectar o usuário do evento");
      console.log(error);

    }
  }
  return (
    <>
      <MainContent>
        <Container>
          <Title titleText={"Eventos"} className="custom-title" />

          <Select
            id="id-tipo-evento"
            name="tipo-evento"
            required={true}
            options={quaisEventos} // aqui o array dos tipos
            manipulationFunction={(e) => myEvents(e.target.value)} // aqui só a variável state
            defaultValue={tipoEvento}
            additionalClass="select-tp-evento"
          />
          <Table
            dados={eventos}
            fnConnect={handleConnect}
            fnShowModal={() => {
              showHideModal();
            }}
          />
        </Container>
      </MainContent>

      {/* SPINNER -Feito com position */}
      {showSpinner ? <Spinner /> : null}

      {showModal ? (
        <Modal
          userId={userData.idUsuario}
          showHideModal={showHideModal}
          fnGet={loadMyComentary}
          fnPost={postMyComentary}
          fnDelete={commentaryRemove}
        />
      ) : null}
    </>
  );
};

export default EventosAlunoPage;
