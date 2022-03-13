import React,{useContext} from "react";
import { Routes, Route } from "react-router-dom";
import Home from './../containers/Home';
import Header from './../components/Header';
import Navbar from './../components/Navbar';
import Footer from "../components/sections/Footer";
import Login from "../containers/Login";
import uiContext from './../context/uiContext';
const NavRouter = () => {
  const {darkMode} = useContext(uiContext);
  return (
    <div className={`font-Montserrat h-screen ${darkMode && 'dark'}`}>
      <Header>
          <Navbar />
      </Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default NavRouter;
