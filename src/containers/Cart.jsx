import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
const Cart = () => {
  return (
    <section
      id="cart"
      className="w-full px-10 h-full dark:bg-tertiary pt-28 pb-56 sm:mb-64"
    >
      <h3 className="text-primary text-3xl font-extrabold dark:text-secondary">Carrito</h3>
            <div className="sm:grid sm:grid-cols-2">
                <div className="grid grid-cols-2 gap-1 w-full">
                    <div>
                        <p className="text-secondary dark:text-white">Pack familiar - Macchu Picchu - S/600</p>
                        <span className="text-gray-400 text-sm">Viaje Familiar - Paraja e hijos</span>
                    </div>
                    <div className="text-red-500">
                        <HiOutlineTrash size={"45px"} />
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-400 text-4xl font-bold mt-5 dark:text-white">Total: S/ 600</h3>

                    <button className="Button w-full sm:w-1/2">Regresar</button>
                </div>
            </div>
            
    </section>
  );
};

export default Cart;
