import React, { useEffect, useState } from 'react';
import Titulo from "../../Components/Titulo/Titulo"
import Container from '../../Components/Container/Container';
import ImageIlustrator from '../../Components/ImageIlustrator/ImageIlustrator';
import eventoImage from '../../Assets/icons/evento.svg'
import Main from '../../Components/Main/Main';
import Notification from '../../Components/Notification/Notification';

import FormComponents, { Button, Input, Select } from '../../Components/FormComponents/FormComponents'
import TableE from '../Eventos/TableE/TableE';
import api, { postNextEventsResource, postTitleEventsResources } from '../../Services/Service';


const Eventos = () => {

    //states
    const [frmEdit, setFrmEdit] = useState(false); //state form para mudar a tela de acordo com o método
    const [evento, setEvento] = useState([]); //array de eventos
    const [notifyUser, setNotifyUser] = useState();
    const [titulo, setTitulo] = useState("");
    const [tipoEventos, setTipoEventos] = useState([]) //-> lista de array vinda da api
    const [submitData, setSubmitData] = useState({
        nomeEvento: "",
        descricao: "",
        idTipoEvento: "",
        dataEvento: "",
        idInstituicao: "b5c5648e-9288-4092-9568-3d74f2e7f099"

    })
    const [idEvento, setIdEvento] = useState("")

    //chamar os dados da API para serem exibidos na tela

    useEffect(() => {
        async function loadEvents() {
            //fazendo o try para se conectar com a API
            try {
                const retorno = await api.get(postNextEventsResource)
                setEvento(retorno.data)
                console.log(retorno.data);


            } catch (error) {
                setNotifyUser({
                    titleNote: "Api- Error",
                    textNote: `erro na conexão com o backend`,
                    imgIcon: "danger",
                    imgAlt:
                        "imagem de ilustração de erro",
                    showMessage: true
                });
                console.log(error);
            }
        }
        loadEvents();
    }, [])

    useEffect(() => {
        async function loadEventsType() {
            try {
                const retorno = await api.get(postTitleEventsResources)
                setTipoEventos(retorno.data)
            } catch (error) {
                console.log(error);
            }
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

    //*******************************HANDLESUBMIT - ENVIO FORMULÁRIO***************************
    async function handleSubmit(e) {
        e.preventDefault();

        if (submitData.nomeEvento.trim().length < 3) {
            setNotifyUser({
                titleNote: "Aviso",
                textNote: `o titulo deve conter pelo menos 3 caracteres`,
                imgIcon: "warning",
                imgAlt:
                    "imagem de ilustração de warning. Rapaz segurando um X",
                showMessage: true
            });
            return;
        }

        try {
            setSubmitData({
                ...submitData,
                idInstituicao: "b5c5648e-9288-4092-9568-3d74f2e7f099"
            })
            await api.post(postNextEventsResource, submitData);

            console.log(submitData);

            setNotifyUser({
                titleNote: "Sucesso",
                textNote: `Evento cadastrado com sucesso!`,
                imgIcon: "success",
                imgAlt:
                    "imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação OK",
                showMessage: true
            });


            //atualiza a tela depois de cadastrar um novo tipo de evento
            const buscaEvento = await api.get(postNextEventsResource);
            setEvento(buscaEvento.data);


        } catch (error) {
            setNotifyUser({
                titleNote: "Api - Error",
                textNote: `Erro com a conexão com o backend`,
                imgIcon: "warning",
                imgAlt:
                    "imagem de ilustração de warning. Rapaz segurando um X",
                showMessage: true
            });
            console.log(submitData);
            console.log(JSON.stringify(submitData));
            console.log(error);
        }
    }


    //******************************HANDLEUPDATE - ATUALIZA FORMS******************************
    async function handleUpdate(e) {
        e.preventDefault();

        try {
            const retorno = await api.put(`${postNextEventsResource}/${idEvento}`, submitData)

            if (retorno.status == 204) {

                const buscaEvento = await api.get(postNextEventsResource)

                setEvento(buscaEvento.data)

                setNotifyUser({
                    titleNote: "Sucesso",
                    textNote: `evento excluido com sucesso`,
                    imgIcon: "success",
                    imgAlt:
                        "imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação OK",
                    showMessage: true
                });
            }
            editActionAbort(true)

            setSubmitData({
                nomeEvento: "",
                descricao: "",
                idTipoEvento: "",
                idInstituicao: "",
                dataEvento: ""

            });

        } catch (error) {
            console.log(error);
        }

    }

    // ****************************HANDLEDELETE - DELETA OS DADOS******************************
    async function handleDelete(idEvento) {
        alert(`vamos apagar o evento de id ${idEvento}`)

        if (!window.confirm("Voce realmente deseja cancelar este evento?")) {
            return
        }

        try {
            const retorno = await api.delete(`${postNextEventsResource}/${idEvento}`)

            if (retorno.status == 204) {

                const buscaEvento = await api.get(postNextEventsResource)

                setEvento(buscaEvento.data)

                setNotifyUser({
                    titleNote: "Sucesso",
                    textNote: `evento excluido com sucesso`,
                    imgIcon: "success",
                    imgAlt:
                        "imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação OK",
                    showMessage: true
                });
            }

        } catch (error) {
            setNotifyUser({
                titleNote: "Api- Error",
                textNote: `erro na conexão com o backend`,
                imgIcon: "danger",
                imgAlt:
                    "imagem de ilustração de erro",
                showMessage: true
            });

            console.log(error);
        }
    }


    //****************************ABORT - FUNCAO PARA CANCELAR O ENVIO *************************
    function editActionAbort() {
        setFrmEdit(false)

        setSubmitData({})

    }

    // ***************************SHOWUPDATEFORM - MOSTRA FORM DE EDIÇÃO ***********************

    async function showUpdateForm(idEvento) {
        setFrmEdit(true)
        setIdEvento(idEvento)

        try {
            const retorno = await api.get(`${postNextEventsResource}/${idEvento}`)
            setSubmitData({
                nomeEvento: retorno.data.nomeEvento,
                descricao: retorno.data.descricao,
                idTipoEvento: retorno.data.idTipoEvento,
                dataEvento: new Date(retorno.data.dataEvento).toLocaleDateString("sv-SE")
            })
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div>
            {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}

            <Main>
                <section className='cadastro-evento-section'>

                    <Container>

                        <Titulo titleText={"Página de Eventos"} color=' #B51D44' />

                        <div className="cadastro-evento__box">

                            <ImageIlustrator imageRender={eventoImage} />

                            {/* trazer ao lado o formulário */}

                            <form
                                action=""
                                className='ftipo-evento'
                                onSubmit={frmEdit ? handleUpdate : handleSubmit}
                            // verificando se o formulário está para edição ou cadastro
                            >
                                {/* if ternário -> primeiro o cadastrar */}

                                {
                                    !frmEdit ? (
                                        //logica para cadastro
                                        <>
                                            <Input
                                                id={"Nome"}
                                                placeholder={"NomeEvento"}
                                                name={"Nome"}
                                                type={"text"}
                                                required={"required"}
                                                value={submitData.nomeEvento}
                                                manipulationFunction={(e) => {
                                                    setSubmitData({
                                                        ...submitData,
                                                        nomeEvento: e.target.value
                                                    })
                                                }}
                                            />

                                            <Input
                                                id={"Descricao"}
                                                placeholder={"Descrição"}
                                                name={"Descricao"}
                                                type={"text"}
                                                required={"required"}
                                                value={submitData.descricao}
                                                manipulationFunction={(e) => {
                                                    setSubmitData({
                                                        ...submitData,
                                                        descricao: e.target.value
                                                    })
                                                }}
                                            />
                                            <Select
                                                id="tipo-evento"
                                                // placeholder="tipo de evento"
                                                name="tipo-evento"
                                                required={"required"}
                                                options={tipoEventos} //lista de array vinda da api
                                                defaultValue={submitData.idTipoEvento}
                                                manipulationFunction={(e) => {
                                                    setSubmitData({
                                                        ...submitData,
                                                        idTipoEvento: e.target.value
                                                    })
                                                }}
                                            />

                                            <Input
                                                id={"DataEvento"}
                                                type={"date"}
                                                required={"required"}
                                                value={submitData.dataEvento}
                                                manipulationFunction={(e) => {
                                                    setSubmitData({
                                                        ...submitData,
                                                        dataEvento: e.target.value
                                                    })
                                                }}
                                            />

                                            <Button
                                                id={"button"}
                                                textButton={"Cadastrar"}
                                                name={"cadastrar"}
                                                type={"submit"}
                                            />
                                        </>


                                    ) : (
                                        //logica para atualização
                                        <>
                                            <Input
                                                id={"Nome"}
                                                placeholder={"NomeEvento"}
                                                name={"Nome"}
                                                type={"text"}
                                                required={"required"}
                                                value={submitData.nomeEvento}
                                                manipulationFunction={(e) => {
                                                    setSubmitData({
                                                        ...submitData,
                                                        nomeEvento: e.target.value
                                                    })
                                                }}
                                            />

                                            <Input
                                                id={"Descricao"}
                                                placeholder={"Descrição"}
                                                name={"Descricao"}
                                                type={"text"}
                                                required={"required"}
                                                value={submitData.descricao}
                                                manipulationFunction={(e) => {
                                                    setSubmitData({
                                                        ...submitData,
                                                        descricao: e.target.value
                                                    })
                                                }}
                                            />

                                            <Select
                                                id="tipo-evento"
                                                // placeholder="tipo de evento"
                                                name="tipo-evento"
                                                required={"required"}
                                                options={tipoEventos} //lista de array vinda da api
                                                manipulationFunction={(e) => {
                                                    setSubmitData({
                                                        ...submitData,
                                                        idTipoEvento: e.target.value
                                                    })
                                                }}
                                            />

                                            <Input
                                                id={"DataEvento"}
                                                type={"date"}
                                                required={"required"}
                                                value={submitData.dataEvento}
                                                manipulationFunction={(e) => {
                                                    setSubmitData({
                                                        ...submitData,
                                                        dataEvento: e.target.value
                                                    })
                                                }}
                                            />

                                            <Button
                                                id={"atualizar"}
                                                textButton={"Atualizar"}
                                                name={"atualizar"}
                                                type={"submit"}
                                            />

                                            <Button
                                                id={"cancelar"}
                                                textButton={"Cancelar"}
                                                name={"cancelar"}
                                                type={"button"}
                                                manipulationFunction={editActionAbort}
                                            />
                                        </>

                                    )
                                }

                            </form>
                        </div>

                    </Container>

                </section>

                <section className="lista-eventos-section">
                    <Container>
                        <Titulo titleText={"Lista Eventos"} color='white' />

                        <TableE
                            dados={evento}
                            dadostop={tipoEventos}

                            fnUpdate={showUpdateForm}
                            fnDelete={handleDelete}
                        />
                    </Container>
                </section>
            </Main>
        </div>
    );
};

export default Eventos;