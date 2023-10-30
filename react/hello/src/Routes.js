import React from "react";
import { Route as Rota, BrowserRouter, Routes } from 'react-router-dom' //import da dependencia que utilizamos(react-router-dom) => npm i  react-router-dom

//imports dos componentes - Páginas...
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProdutoPage from "./Pages/ProdutoPage/ProdutoPage";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Rota element={ <HomePage/> } path={"/"} exact />
                <Rota element={ <LoginPage/> } path={"/Login"}/>
                <Rota element={ <ProdutoPage/> } path={"/Produtos"}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;