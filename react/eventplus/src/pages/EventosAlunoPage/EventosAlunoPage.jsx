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
  getMinhasReservas
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
    async function loadEventsType() {
      if (tipoEvento == 1) {

        try {
          const retorno = await api.get(postNextEventsResource);
          setEventos(retorno.data);
          console.log(eventos);
        } catch (error) {
          console.log(error);
        }

      }else {

        try {
        const retornoMeusEventos = await api.get(`${getMinhasReservas}/${userData.idUsuario}`) //falta passar aqui o ID
          setEventos(retornoMeusEventos.data)
        } catch (error) {
          console.log(error);
        }
        
      }
    }
    loadEventsType();
  }, [tipoEvento]);

  //criar uma função para trazer os eventos do aluno ou todos os eventos

  // toggle meus eventos ou todos os eventos
  function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
  }

  async function loadMyComentary(idComentary) {
    return "????";
  }

  const showHideModal = () => {
    setShowModal(showModal ? false : true);
  };

  const commentaryRemove = () => {
    alert("Remover o comentário");
  };

  function handleConnect() {
    alert("Desenvolver a função conectar evento");
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
          userId={userData.userId}
          showHideModal={showHideModal}
          fnDelete={commentaryRemove}
        />
      ) : null}
    </>
  );
};

export default EventosAlunoPage;
