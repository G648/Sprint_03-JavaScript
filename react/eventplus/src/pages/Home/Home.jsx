import React from 'react';
import Titulo from '../../Components/Titulo/Titulo';
import Banner from '../../Components/Banner/Banner';
import Main from '../../Components/Main/Main'
import VisionSection from '../../Components/VisionSection/VisionSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Titulo titleText={"Próximos eventos"} classeAdicional='margin-top'/>

            <Main>
                <VisionSection/>
            </Main>

        </div>
    );
};

export default Home;