import React from 'react'

const Header = ({children}) => {
  return (
    <header className="bg-bannerMobile bg-cover h-80 sm:h-2/3 md:h-full bg-center relative">
      {children}
      <div
        className="absolute bg-black bg-opacity-40 h-full w-full top-0 z-0 dark:bg-opacity-70"
      ></div>
      <div className="absolute bottom-12 left-5 sm:bottom-1/4 md:left-28">
        <h2 className="text-white font-bold text-4xl w-1/2 sm:text-5xl sm:w-full sm:mb-4 md:text-7xl">¿Estas preparado?</h2>
        <p className="text-gray-300 mt-1 md:text-xl">
          Vive esta gran aventura junto a nosotros
        </p>
        <button className="Button w-1/2 font-semibold sm:mt-2">Registrarse</button>
      </div>
    </header>
  )
}

export default Header