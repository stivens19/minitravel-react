import React from "react";
import { FaTiktok, FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";
import { HiOutlineShoppingCart, HiOutlineUserCircle,HiHome } from "react-icons/hi";
import LinkActive from "../ui/LinkActive";
const Footer = () => {
  return (
    <>
      <footer className="bg-primary w-full text-white flex justify-center h-64 sm:h-52">
        <div className="w-4/5 h-auto pb-4">
          <h2 className="text-center font-black text-2xl mt-5">MiniTravel</h2>
          <div className="flex justify-center space-x-4 mt-3">
            <div className="border-4 rounded-full p-1">
              <FaTiktok size={"40px"} />
            </div>
            <div className="border-4 rounded-full p-1">
              <FaYoutube size={"40px"} />
            </div>
            <div className="border-4 rounded-full p-1">
              <FaTwitter size={"40px"} />
            </div>
            <div className="border-4 rounded-full p-1">
              <FaFacebookF size={"40px"} />
            </div>
          </div>
          <p className="text-center text-sm mt-4">
            &copy; 2022 Todos los derechos reservados{" "}
            <span className="text-secondary">Stivens Espinoza</span>
          </p>
        </div>
      </footer>
      <div className="flex justify-center space-x-9 h-12 items-center bg-gray-100 fixed bottom-0 w-full sm:hidden dark:bg-tertiary">
        <div className="hover:bg-gray-100 p-1 cursor-pointer text-gray-300">
          
          <LinkActive to="/" classActive="text-primary">
            <HiHome size={"35px"} />
          </LinkActive>
        </div>
        <div className="hover:bg-gray-100 p-1 cursor-pointer text-gray-300">
          
          <LinkActive to="/cart" classActive="text-primary">
            <HiOutlineShoppingCart size={"35px"} />
          </LinkActive>
        </div>
        <div className="hover:bg-gray-100 p-1 cursor-pointer text-gray-300">
          <LinkActive to="/login" classActive="text-primary">
            <HiOutlineUserCircle size={"35px"} />
          </LinkActive>
          
        </div>
      </div>
    </>
  );
};

export default Footer;
