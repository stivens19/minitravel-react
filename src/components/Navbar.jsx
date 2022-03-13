import React,{useState,useEffect} from "react";
import MoonIcon from "./svg/MoonIcon";
import { HiOutlineShoppingCart,HiOutlineUserCircle } from "react-icons/hi";
const Navbar = () => {
  const [dark, setDark] = useState(false);
  
  return (
    <nav className="absolute w-full flex justify-between pt-4 px-5 text-white items-center z-10 md:px-28">
      <div>
        <h3 className="font-black text-2xl sm:text-4xl">MiniTravel</h3>
      </div>
      <ul className="flex justify-around space-x-5">
          <li id="toggle-dark"  className="cursor-pointer">
            <MoonIcon />
          </li>
          <li className="hidden sm:inline-block cursor-pointer">
            <HiOutlineShoppingCart size={"35px"} />
          </li>
          <li className="hidden sm:inline-block cursor-pointer">
            <HiOutlineUserCircle size={"35px"} />
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
