import React, { useEffect, useState } from 'react';
import './Home.css'

import Titulo from '../../Components/Titulo/Titulo';
import Banner from '../../Components/Banner/Banner';
import Main from '../../Components/Main/Main'
import VisionSection from '../../Components/VisionSection/VisionSection';
import ContactSection from '../../Components/ContactSection/ContactSection';
import NextEvent from '../../Components/NextEvent/NextEvent';
import Container from '../../Components/Container/Container'
// import axios from 'axios';
import api from '../../Services/Service';
import { getNextEventsResource } from '../../Services/Service'
import Notification from '../../Components/Notification/Notification';


const Home = () => {

    const [nextEvents, setNexEvents] = useState([])
    const [notifyUser, setNotifyUser] = useState();

    //roda somente na inicialização do componente
    useEffect(() => {
        async function getNextEvents() {
            try {
                const promise = api.get(getNextEventsResource);
                const dados = (await promise).data;

                setNexEvents(dados); //atualiza o state
            } catch (error) {
                setNotifyUser({
                    titleNote: "API - Error",
                    textNote: `Erro na conexão com o servidor`,
                    imgIcon: "danger",
                    imgAlt:
                        "imagem de ilustração de erro.",
                    showMessage: true
                });
            }

        }
        getNextEvents(); //Roda a função
    }, []);

    return (
        <div>
            <Banner />

            <section className='proximos-eventos'>
                <Container>

                    {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}

                    <Titulo titleText={"Próximos eventos"} />

                    <div className='events-box'>

                        {
                            nextEvents.map((e) => {
                                return (

                                    <NextEvent
                                        //chave unica usada quando utilizamos map
                                        key={e.idEvento}
                                        title={e.nomeEvento}
                                        description={e.descricao}
                                        eventDate={e.dataEvento}
                                        idEvent={e.idEvento}
                                    />

                                );
                            })
                        }


                    </div>

                </Container>
            </section>

            <Main>
                <VisionSection />
            </Main>

            <ContactSection />

        </div>
    );
};

export default Home;