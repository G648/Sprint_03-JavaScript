import React from 'react';
//realizar a importação do pacote da rota
import { Route as Rota, BrowserRouter, Routes } from 'react-router-dom';

//Fazer a importação dos componentes das páginas
import HomePage from "./Pages/HomePage/HomePage"
import LoginPage from "./Pages/LoginPage/LoginPage"

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Rota element={<HomePage/>} path="/" exact/>
                    <Rota element={<LoginPage/>} path="/Login"/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Router;