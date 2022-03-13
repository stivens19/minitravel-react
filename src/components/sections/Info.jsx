import React from 'react'
import { HiOutlineLightBulb,HiCursorClick,HiCurrencyDollar,HiShieldCheck } from 'react-icons/hi'
const Info = () => {
  return (
    <section id="info" className="flex justify-center h-auto dark:bg-tertiary">
        <div className="w-4/5 pb-4">
          <h2 className="text-primary font-extrabold text-lg text-center mt-2 sm:text-3xl dark:text-secondary">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-center text-gray-400 text-sm dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing 
          </p>

          <div className="grid grid-cols-2 gap-5 mt-3 md:w-2/5 md:mx-auto">
            <div className="bg-primary w-full p-1 flex flex-col items-center">
              <HiOutlineLightBulb color='white' size={"85%"} />
              <p className="text-white font-bold text-center">Garantia</p>
            </div>

            <div className="bg-secondary w-full p-1 flex flex-col items-center">
                <HiCursorClick color='white' size={"85%"} />
                <p className="text-white font-bold text-center">Accesible</p>
            </div>

            <div className="bg-secondary w-full p-1 flex flex-col items-center">
               <HiCurrencyDollar color='white' size={"85%"} />
                <p className="text-white font-bold text-center">Económico</p>
            </div>

            <div className="bg-primary w-full p-1 flex flex-col items-center">
              <HiShieldCheck color='white' size={"85%"} />
              <p className="text-white font-bold text-center">Seguro</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Info