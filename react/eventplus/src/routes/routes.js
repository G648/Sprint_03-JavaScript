import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import das paginas
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Eventos from "../pages/Eventos/Eventos";
import TiposEvento from "../pages/TiposEvento/TiposEvento";
import Teste from "../pages/Teste/Teste";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { PrivateRoute } from "./PrivateRoute";
import EventosAlunoPage from "../pages/EventosAlunoPage/EventosAlunoPage";
const Rotas = () => (
  <div>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route element={<Home />} path="/" exact />

        {/* rota privada */}
        <Route
          path="/tipos-evento"
          element={
            <PrivateRoute>
              <TiposEvento />
            </PrivateRoute>
          }
        />

        {/* rota privada */}
        <Route
          path="/eventos"
          element={
            <PrivateRoute>
              <Eventos />
            </PrivateRoute>
          }
        />

        {/* rota privada */}
        <Route
          path="/eventos-aluno"
          element={
            <PrivateRoute>
              <EventosAlunoPage />
            </PrivateRoute>
          }
        />

        <Route element={<Login />} path="/login" />
        {/* <Route element={<Teste />} path="/teste"/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);

export default Rotas;
