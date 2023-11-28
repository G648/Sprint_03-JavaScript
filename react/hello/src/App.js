import { useContext, useEffect, useState } from "react";
import "./App.css";
import Rotas from "./Routes";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const produtos = [
    {
      idProduto: Math.random(),
      descricao: "camiseta Regata",
      preco: 49.99,
      promo: false,
    },
    {
      idProduto: Math.random(),
      descricao: "Blusa moletom",
      preco: 119.99,
      promo: true,
    },
    {
      idProduto: Math.random(),
      descricao: "camiseta Regata",
      preco: 49.99,
      promo: false,
    },
  ];

  //validação do localStorage
  useEffect(() => {
    const tm = localStorage.getItem("theme");

    if (tm !== null) {
      setTheme(tm)
    }else{
      setTheme('light')
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, produtos }}>
      <div className={`App ${theme === "dark" ? "App-dark" : ""}`}>
        <Rotas />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
