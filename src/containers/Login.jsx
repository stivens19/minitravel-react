import React from "react";
import Input from "./../components/ui/Input";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <section
        id="login"
        className="w-full flex items-center h-72 py-3 flex-col dark:bg-tertiary"
      >
        <h3 className="text-primary font-extrabold text-lg text-center mt-2 sm:text-3xl dark:text-secondary">
          Iniciar Sesion
        </h3>
        <form className="w-2/3 md:w-1/4">
          <Input type="email" placeholder="Email:" />
          <Input type="password" placeholder="Password:" />
          <button className="text-white font-black w-full bg-secondary py-1 hover:bg-primary transition-all ease-in-out duration-500 mt-5">
            Enviar
          </button>
          <Link to="/actions/register">
            <p className="text-center text-secondary font-black mt-2 dark:text-white">
              ¿No tienes cuenta? Registrate
            </p>
          </Link>
          
        </form>
      </section>
    </>
  );
};

export default Login;
