import React, { useContext, useState } from "react";
import { Route as Rota, BrowserRouter, Routes } from 'react-router-dom' //import da dependencia que utilizamos(react-router-dom) => npm i  react-router-dom

//imports dos componentes - Páginas...
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProdutoPage from "./Pages/ProdutoPage/ProdutoPage";
import Nav from "./components/Nav/Nav";
import DadosImportante from "./Pages/DadosImportante/DadosImportante";
import MeusPedidos from "./Pages/MeusPedidos/MeusPedidos";
import { ThemeContext } from "./context/ThemeContext";

//context API
//token
//login em sisas

const Rotas = () => {
    //importando o objeto themecontext, por isso usamos o {}

    const [theme, setTheme] = useState('light')

    return (
        <BrowserRouter>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <Nav />
                <Routes>
                    <Rota element={<HomePage />} path={"/"} exact />
                    <Rota element={<LoginPage />} path={"/Login"} />
                    <Rota element={<ProdutoPage />} path={"/Produtos"} />
                    <Rota element={<DadosImportante />} path={"/Dados"} />
                    <Rota element={<MeusPedidos />} path={"/Meus-pedidos"} />
                    <Rota element={<HomePage />} path={"*"} />
                </Routes>
            </ThemeContext.Provider>
        </BrowserRouter>
    )
}

export default Rotas;