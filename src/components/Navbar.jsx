import React,{useContext} from "react";
import MoonIcon from "./svg/MoonIcon";
import { HiOutlineShoppingCart,HiOutlineUserCircle } from "react-icons/hi";
import LinkActive from './ui/LinkActive';
import uiContext from './../context/uiContext';
import { Link } from 'react-router-dom';

const Navbar = ({hideImage}) => {
  const {setDarkMode} = useContext(uiContext);
  return (
    <nav className={`absolute w-full flex justify-between pt-4 px-5 text-white items-center z-10 md:px-28 ${hideImage && 'bg-gray-600 p-2'}`}>
      <div>
        <Link to="/">
          <h3 className="font-black text-2xl sm:text-4xl">MiniTravel</h3>
        </Link>
        
      </div>
      <ul className="flex justify-around space-x-5">
          <li id="toggle-dark"  className="cursor-pointer" onClick={setDarkMode}>
            <MoonIcon />
          </li>
          <li className="hidden sm:inline-block cursor-pointer">
            
            <LinkActive to="/actions/cart" classActive="text-cyan-200">
              <HiOutlineShoppingCart size={"35px"} />
            </LinkActive>
          </li>
          <li className="hidden sm:inline-block cursor-pointer">
            <LinkActive to="/login" classActive="text-cyan-200">
              <HiOutlineUserCircle size={"35px"} />
            </LinkActive>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
