import React from "react";
import Input from './../ui/Input';

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex justify-center pb-5 bg-gray-100 dark:bg-tertiary"
    >
      <div className="w-4/5 h-auto pb-4">
        <h2 className="text-primary font-extrabold text-lg text-center mt-2 sm:text-3xl dark:text-secondary">
          Contactenos
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-3 md:w-3/4 mx-auto">
          <div className="md:mt-4">
            <p className="text-center text-gray-400 text-sm md:text-left dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem nisi vel est et at aut dicta rerum enim. Quisquam,
            </p>
            <div className="hidden md:block mt-10 text-gray-400">
              <div className="flex">
                <span className="mr-1">Tel.</span>
                <p>+51 931340718</p>
              </div>
              <div className="flex">
                <span className="mr-1">Dir.</span>
                <p>Av.Los desconocidos</p>
              </div>
              <div className="flex">
                <span className="mr-1">Email.</span>
                <p>stivens70espinoza@gmail.com</p>
              </div>
            </div>
          </div>
          <form className="w-full mt-4">
            <div>
              <Input type="text" placeholder="Nombre:" />
            </div>
            <div>
              <Input type="email" placeholder="Email:" />
            </div>
            <div>
              <textarea
                className="Input mt-2"
                rows="5"
                placeholder="Mensaje:"
              ></textarea>
            </div>
            <button className="text-white font-black w-full bg-secondary py-1 hover:bg-primary transition-all ease-in-out duration-500">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
