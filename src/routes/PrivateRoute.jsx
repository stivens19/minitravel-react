import React from "react";
import { Navigate } from "react-router-dom";
import authContext from "../context/auth/authContext";

const PrivateRoute = ({children}) => {
  const {isAuthenticated} = React.useContext(authContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
