import React from "react";

const Carousel = () => {
  return (
    <section
      id="carousel"
      className="bg-gray-100 sm:flex justify-center items-center overflow-x-auto dark:bg-tertiary"
    >
      <div className="h-72 w-auto  flex flex-nowrap space-x-4 items-center pl-4 sm:w-4/5 sm:h-96 sm:justify-center sm:space-x-12">
        <div className="bg-tRomantic Card">
          <p className="Card--description">Viajes románticos</p>
          <button className="Card--button">Ver</button>
          <div className="Card--mask"></div>
        </div>
        <div className="bg-tFamily Card">
          <p className="Card--description">Viajes románticos</p>
          <div className="Card--mask"></div>
          <button className="Card--button">Ver</button>
        </div>
        <div className="bg-tAdventure Card">
          <p className="Card--description">Viajes románticos</p>
          <div className="Card--mask"></div>
          <button className="Card--button">Ver</button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
