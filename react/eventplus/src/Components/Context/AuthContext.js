import { jwtDecode } from "jwt-decode";
import { createContext } from "react";

export const UserContext = createContext({});

export const userDecodeToken = (theToken) => {
  const decoded = jwtDecode(theToken);

  return { role: decoded.role, nome : decoded.name, token: theToken, idUsuario : decoded.jti };
};
