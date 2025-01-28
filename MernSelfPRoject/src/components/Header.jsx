import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Requires Heroicons
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/Auth";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
const {isLoggedIn}=useAuth()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold">MyWebsite</h1>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/Home" className="text-white hover:text-indigo-300">Home     </NavLink>  
            <NavLink to="/Posts" className="text-white hover:text-indigo-300">Posts    </NavLink  >
            <NavLink to="/About" className="text-white hover:text-indigo-300">About    </NavLink  >
            <NavLink to="/Products" className="text-white hover:text-indigo-300">Products </NavLink>
            {isLoggedIn&&<NavLink to="/logout" className="text-white hover:text-indigo-300">Logout </NavLink>}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <nav className="md:hidden bg-indigo-700">
          <div className="px-4 py-2 space-y-2">
            <a href="#" className="block text-white hover:text-indigo-300">Home</a>
            <a href="#" className="block text-white hover:text-indigo-300">Posts</a>
            <a href="#" className="block text-white hover:text-indigo-300">About</a>
            <a href="#" className="block text-white hover:text-indigo-300">Products</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
