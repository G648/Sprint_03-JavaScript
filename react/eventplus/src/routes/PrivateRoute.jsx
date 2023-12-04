import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children, redirectTo = "/" }) => {
    //verificar se está autenticado
    const isAuthenticated = localStorage.getItem("token") !== null;

    //retornar o componente ou navegar para hoje
    return isAuthenticated ? children : <Navigate to={redirectTo}/> //utilizando o navigate para redirecionar para página home utilizando operador ternário
};
