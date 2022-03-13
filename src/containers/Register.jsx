import React from "react";
import Input from './../components/ui/Input';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section
      id="login"
      class="w-full flex items-center flex-col h-full dark:bg-tertiary py-28 sm:py-52"
    >
      <h3 class="text-primary font-extrabold text-lg text-center mt-2 sm:text-3xl dark:text-secondary">
        Registrarse
      </h3>
      <form class="w-2/3 md:w-1/4">
        <Input type="text" placeholder="Nombres:" />
        <Input type="email" placeholder="Email:" />
        <Input type="password" placeholder="Password:" />
        <Input type="password" placeholder="Confirmar Password:" />
        <button class="text-white font-black w-full bg-secondary py-1 hover:bg-primary transition-all ease-in-out duration-500 mt-5">
          Enviar
        </button>

        <Link to="/login">
        <p class="text-center text-secondary font-black mt-2 dark:text-white">
          ¿Tienes una cuenta? Ingresa
        </p>
        </Link>
        
      </form>
    </section>
  );
};

export default Register;
