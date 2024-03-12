import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-evenly items-center px-8 py-4 bg-gray-800 text-white shadow-md">
      <div className="flex items-center">
        <h2 className="text-xl md:text-2xl font-bold">Fitness Tracker Dashboard &#128526;</h2>
      </div>
      <nav className="hidden md:flex space-x-4">
        <ul className="flex gap-10 items-center">
          <li className="px-2 py-1 hover:font-bold">
         Home
          </li>
          <li className="px-2 py-1 hover:font-bold">
          Exercises
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
