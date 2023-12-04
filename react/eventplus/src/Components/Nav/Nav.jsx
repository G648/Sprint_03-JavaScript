import React, { useContext } from "react";
import logoMobile from "../../Assets/icons/logo-white.svg";
import logoDesktop from "../../Assets/icons/logo-pink.svg";
import { Link } from "react-router-dom";
import "./Nav.css";
import { UserContext } from "../Context/AuthContext";

const Nav = ({ exibeNavbar, setExibeNavbar }) => {

    const {userData} = useContext(UserContext)

  console.log(`Exibe o menu ? ${exibeNavbar}`);
  return (
    <nav className={`navbar ${exibeNavbar ? "exibeNavbar" : ""}`}>
      <span
        onClick={() => {
          setExibeNavbar(false);
        }}
        className="navbar__close"
      >
        x
      </span>

      <Link to="/" className="eventlogo">
        <img
          className="eventlogo__logo-image"
          src={window.innerWidth >= 992 ? logoDesktop : logoMobile}
          alt="Event Plus Logo"
        />
      </Link>

      <div className="navbar__items-box">
        <Link to="/" className="navbar__item">
          Home
        </Link>

        {userData.nome && userData.role === "Administrador" ? 
        <>
        <Link to="/tipos-evento" className="navbar__item"> Tipos de Evento </Link>
         <Link to="/eventos" className="navbar__item"> Eventos </Link> 
        </> 
        : 
            userData.nome && userData.role === "Comum" ? (
            <>
            <Link to="/eventos-aluno" className="navbar__item"> Eventos Alunos </Link> 
            {/* <Link to="/tipos-evento" className="navbar__item"> Tipos Eventos Alunos </Link>  */}
            </>

        ) : null}

        
        {/* <Link to="/teste" className='navbar__item'>Teste</Link> */}
       
      </div>
    </nav>
  );
};

export default Nav;
