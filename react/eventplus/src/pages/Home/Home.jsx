import React from 'react';
import './Home.css'
import Titulo from '../../Components/Titulo/Titulo';
import Banner from '../../Components/Banner/Banner';
import Main from '../../Components/Main/Main'
import VisionSection from '../../Components/VisionSection/VisionSection';
import ContactSection from '../../Components/ContactSection/ContactSection';
import NextEvent from '../../Components/NextEvent/NextEvent';
import Container from '../../Components/Container/Container'

const Home = () => {
    return (
        <div>
            <Banner />

            <section className='proximos-eventos'>
                <Container>

                    <Titulo titleText={"Próximos eventos"} />

                    <div className='events-box'>
                        <NextEvent 
                            title={"Event C#"}
                            description={"Evento para aprofundar em c# - Backend"}
                            eventDate={"21/12/2023"}
                            idEvent={1}
                        />
                        <NextEvent />
                        <NextEvent />

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