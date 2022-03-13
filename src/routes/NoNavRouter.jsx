import React, { useContext } from "react";
import uiContext from "./../context/uiContext";
import { Route,Routes } from 'react-router-dom';
import Navbar from './../components/Navbar';
import Register from './../containers/Register';
import Footer from './../components/sections/Footer';
import Cart from './../containers/Cart';

const NoNavRouter = () => {
  const { darkMode } = useContext(uiContext);
  return (
    <div className={`font-Montserrat h-screen ${darkMode && "dark"}`}>
      <Navbar hideImage={true} />
      <main>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default NoNavRouter;
