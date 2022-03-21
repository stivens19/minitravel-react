import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Category = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    console.log(searchParams.get('id'));
  return (
    <section className="dark:bg-tertiary w-11/12 mx-auto mb-60 grid grid-cols-4 gap-4 pt-28">
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/09/26/21/33/suspension-bridge-959853_960_720.jpg"
          alt=""
        />
        <h3 className="dark:text-white">Lugar de paseo</h3>
        <div>
          <p className="text-gray-200">Descripcion</p>
          <span className="dark:text-white">S/100</span>
          <button className="Button w-full">Agregar</button>
        </div>
      </div>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/09/26/21/33/suspension-bridge-959853_960_720.jpg"
          alt=""
        />
        <h3 className="dark:text-white">Lugar de paseo</h3>
        <div>
          <p className="text-gray-200">Descripcion</p>
          <span className="dark:text-white">S/100</span>
          <button className="Button w-full">Agregar</button>
        </div>
      </div>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/09/26/21/33/suspension-bridge-959853_960_720.jpg"
          alt=""
        />
        <h3 className="dark:text-white">Lugar de paseo</h3>
        <div>
          <p className="text-gray-200">Descripcion</p>
          <span className="dark:text-white">S/100</span>
          <button className="Button w-full">Agregar</button>
        </div>
      </div>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/09/26/21/33/suspension-bridge-959853_960_720.jpg"
          alt=""
        />
        <h3 className="dark:text-white">Lugar de paseo</h3>
        <div>
          <p className="text-gray-200">Descripcion</p>
          <span className="dark:text-white">S/100</span>
          <button className="Button w-full">Agregar</button>
        </div>
      </div>
    </section>
  );
};

export default Category;
