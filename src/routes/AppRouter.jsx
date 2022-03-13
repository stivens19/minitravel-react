import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import React from 'react'
import PrivateRoute from './PrivateRoute';
import UserRoute from "./UserRoute";
import NavRouter from "./NavRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<NavRouter />} />
            <Route path="/user/*" element={
                <PrivateRoute>
                    <UserRoute />
                </PrivateRoute>
               } 
            />
            
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter