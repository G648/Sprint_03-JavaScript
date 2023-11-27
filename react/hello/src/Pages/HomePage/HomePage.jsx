import React, { useContext } from 'react';
import Title from '../../components/Title/Title';
import { ThemeContext } from '../../context/ThemeContext';

const HomePage = () => {

    //referencia da rota
    const {theme} = useContext(ThemeContext)

    return (
        <div>
           <Title text="HomePage"> </Title>

           <span> {theme} </span>
        </div>
    );
};

export default HomePage;