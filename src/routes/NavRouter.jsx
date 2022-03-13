import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './../containers/Home';
import Header from './../components/Header';
import Navbar from './../components/Navbar';
import Footer from "../components/sections/Footer";
const NavRouter = () => {
  return (
    <>
      <Header>
          <Navbar />
      </Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default NavRouter;
