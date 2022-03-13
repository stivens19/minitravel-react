import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const isAuth = true;
  return isAuth ? children : <h2>No autenticado</h2>;
};

export default PrivateRoute;
