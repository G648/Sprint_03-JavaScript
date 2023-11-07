import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Import das paginas
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Eventos from './pages/Eventos/Eventos';
import TiposEvento from './pages/TiposEvento/TiposEvento';
import Teste from './pages/Teste/Teste';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
const Rotas = () => (
    <div>
        <BrowserRouter>
            <Header />

            <Routes>
                <Route element={<Home />} path="/" exact></Route>
                <Route element={<TiposEvento />} path="/tipos-evento"></Route>
                <Route element={<Eventos />} path="/eventos"></Route>
                <Route element={<Login />} path="/login"></Route>
                <Route element={<Teste />} path="/teste"></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
);

export default Rotas;