import React, { useContext, useEffect, useState } from "react";
import ImageIllustrator from "../../Components/ImageIlustrator/ImageIlustrator";
import logo from "../../Assets/icons/logo-pink.svg";
import { Input, Button } from "../../Components/FormComponents/FormComponents";
import loginImg from "../../Assets/icons/login.svg";
import { loginEventsResources } from "../../Services/Service";
import api from "../../Services/Service";
import Notification from "../../Components/Notification/Notification";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import { UserContext,userDecodeToken } from "../../Components/Context/AuthContext";

const LoginPage = () => {
  const [notifyUser, setNotifyUser] = useState();
  const {userData, setUserData} = useContext(UserContext); //import global data usar o destructuring ao inves do []
  const navigate = useNavigate();

  function notificationMessage() {
    setNotifyUser({
      titleNote: "Sucesso",
      textNote: `evento cadastrado com sucesso`,
      imgIcon: "success",
      imgAlt:
        "imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação OK",
      showMessage: true,
    });
  }

  const [user, setUser] = useState({
    email: "",
    senha: "",
  });

  useEffect(() =>{
    if (userData.nome) {
      navigate("/")
    }
  }, [userData])

  async function handleSubmit(e) {
    e.preventDefault();

    if (user.senha.length >= 3) {
      try {
        const promise = await api.post(loginEventsResources, {
          email: user.email,

          senha: user.senha,
        });

        console.log("dados do usuário");

        const userFullToken = userDecodeToken(promise.data.token)
        setUserData(userFullToken)

        localStorage.setItem("token", JSON.stringify(userFullToken))

        console.log(userFullToken);
        console.log(userData);

        //usando o navigate
        navigate("/") //envia o usuário direto para a página inicial

        setNotifyUser({
          titleNote: "Sucesso",
          textNote: `evento cadastrado com sucesso`,
          imgIcon: "success",
          imgAlt:
            "imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação OK",
          showMessage: true,
        });

        
      } catch (error) {
        console.log(error);

        setNotifyUser({
          titleNote: "warning",
          textNote: `deu ruim no login`,
          imgIcon: "warning",
          imgAlt:
            "imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação OK",
          showMessage: true,
        });
      }

      // setNotifyUser({
      //   titleNote: "warning",
      //   textNote: `A senha deve conter mais que 3 caracteres`,
      //   imgIcon: "warning",
      //   imgAlt:
      //     "imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação OK",
      //   showMessage: true,
      // });

      return;
    }

    console.log("dados do login");
    console.log(user);
  }

  //validar os dados que vem do cadastro do usuário

  return (
    <>
      {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}
      <div className="layout-grid-login">
        <div className="login">
          <div className="login__illustration">
            <div className="login__illustration-rotate"></div>
            <ImageIllustrator
              imageRender={loginImg}
              altText="Imagem de um homem em frente de uma porta de entrada"
              additionalClass="login-illustrator "
            />
          </div>

          <div className="frm-login">
            <img src={logo} className="frm-login__logo" alt="" />

            <form className="frm-login__formbox" onSubmit={handleSubmit}>
              <Input
                additionalClass="frm-login__entry"
                type="email"
                id="login"
                name="login"
                required={true}
                value={user.email}
                manipulationFunction={(e) => {
                  setUser({ ...user, email: e.target.value.trim() });
                }}
                placeholder="Username"
              />
              <Input
                additionalClass="frm-login__entry"
                type="password"
                id="senha"
                name="senha"
                required={true}
                value={user.senha}
                manipulationFunction={(e) => {
                  setUser({ ...user, senha: e.target.value.trim() });
                }} //operador rest
                placeholder="****"
              />

              <a href="" className="frm-login__link">
                Esqueceu a senha?
              </a>

              <Button
                textButton="Login"
                id="btn-login"
                name="btn-login"
                type="submit"
                additionalClass="frm-login__button"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
