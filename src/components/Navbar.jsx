import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-evenly items-center px-8 py-4 bg-gray-800 text-white shadow-md">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold">Fitness Tracker Dashboard &#128526;</h2>
      </div>
      <nav className="hidden md:flex space-x-4">
        <ul className="flex gap-10 items-center">
          <li className="px-2 py-1 hover:font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 py-1 hover:font-bold">
            <Link to="/exercises">Exercises</Link>
          </li>
        </ul>
      </nav>
      <button
        id="menu-btn"
        className="md:hidden focus:outline-none text-white hover:text-gray-400"
        onClick={toggleMobileMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16v12H4zm2-2a2 2 0 10-4 0 2 2 0 004 0zM2 16a2 2 0 104 0 2 2 0 00-4 0z" />
        </svg>
      </button>
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-gray-800 opacity-0 invisible md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : ''
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-75"></div>
        <nav className="absolute right-0 top-0 px-4 py-8 h-full w-3/4 bg-white transition-all duration-300 ease-in-out">
          <ul className="flex flex-col space-y-4 text-center text-xl font-bold">
            <li className="text-slate-800 hover:text-gray-600">
              <Link to="/">Home</Link>
            </li>
            <li className="text-slate-800 hover:text-gray-600">
              <Link to="/exercises">Exercises</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
