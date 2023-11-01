import React from 'react';
//realizar a importação do pacote da rota
import { Route as Rota, BrowserRouter, Routes } from 'react-router-dom';

//Fazer a importação dos componentes das páginas
import HomePage from "./Pages/HomePage/HomePage"
import LoginPage from "./Pages/LoginPage/LoginPage"
import EventoPage from './Pages/EventoPage/EventoPage';
import TipoEventoPage from './Pages/TipoEventoPage/TipoEventoPage';
import TestePage from './Pages/Teste/TestePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Rota element={<HomePage/>} path="/" exact/>
                    <Rota element={<LoginPage/>} path="/Login"/>
                    <Rota element={<EventoPage/>} path="/Evento"/>
                    <Rota element={<TipoEventoPage/>} path="/TiposEvento"/>
                    <Rota element={<TestePage/>} path="/Teste"/>
                </Routes>
               <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default Router;