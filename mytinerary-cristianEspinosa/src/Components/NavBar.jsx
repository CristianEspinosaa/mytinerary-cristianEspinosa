import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-300 p-4 md:flex md:flex-row items-center justify-between md:items-center fixed w-full z-30">

  <div className="text-white font-bold text-lg text-center w-full md:w-auto">
    My Itinerary
  </div>
  <div className="md:hidden flex justify-center w-full">
    <button onClick={toggleMenu} className="text-white focus:outline-none">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
  <div className={`md:flex md:flex-row md:items-center md:gap-5 ${isOpen ? 'flex flex-col items-center' : 'hidden'} md:flex md:w-92`}>
    <a href="/" className="text-white hover:text-gray-400 block px-4 py-2 md:p-0 text-center">Home</a>
    <a href="/cities" className="text-white hover:text-gray-400 block px-4 py-2 md:p-0 text-center">Cities</a>
    <button className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-92 text-center">
      Login
    </button>
  </div>
</nav>

  );
};

export default Navbar;




