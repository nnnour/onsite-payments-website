import React, { useState } from 'react';
import logo from '../assets/logo.png';  // Ensure your logo path is correct
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for Hamburger Menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the dropdown when a menu item is clicked
  };

  return (
    <header className="bg-white shadow-md py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <img src={logo} alt="Onsite Payments Logo" className="w-14 h-14" /> {/* Adjusted size */}
          <div className="leading-tight">
            <h1 className="text-3xl sm:text-4xl font-bold text-center" style={{ color: '#8EC221', lineHeight: '1.2' }}>ONSITE</h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-center" style={{ color: '#F4A300', marginTop: '-10px', letterSpacing: '0.05rem' }}>PAYMENTS</h2>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden absolute right-6">
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? <FaTimes className="text-red-500" /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Menu (visible on large screens) */}
        <nav className={`md:flex space-x-6 text-lg hidden md:block ml-auto`}>
          <ul className="md:flex space-x-6 text-lg">
            <li>
              <a href="#features" onClick={handleMenuItemClick} className="text-gray-800 hover:bg-[#FFA900] hover:text-white px-4 py-2 rounded-full transition-transform duration-700 transform hover:scale-105 hover:shadow-lg">Features</a>
            </li>
            <li>
              <a href="#solutions" onClick={handleMenuItemClick} className="text-gray-800 hover:bg-[#FFA900] hover:text-white px-4 py-2 rounded-full transition-transform duration-700 transform hover:scale-105 hover:shadow-lg">Solutions</a>
            </li>
            <li>
              <a href="#support" onClick={handleMenuItemClick} className="text-gray-800 hover:bg-[#FFA900] hover:text-white px-4 py-2 rounded-full transition-transform duration-700 transform hover:scale-105 hover:shadow-lg">Support</a>
            </li>
            <li>
              <a href="#contact" onClick={handleMenuItemClick} className="text-gray-800 hover:bg-[#FFA900] hover:text-white px-4 py-2 rounded-full transition-transform duration-700 transform hover:scale-105 hover:shadow-lg">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Get Started Button (visible on large screens) */}
        <button 
          onClick={handleMenuItemClick}  // Close menu and handle navigation
          className="hidden md:block border-2 border-[#FFA900] text-[#FFA900] px-6 py-2 rounded-full hover:bg-[#FFA900] hover:text-white transition-transform duration-700 transform hover:scale-105 hover:shadow-lg ml-6"
        >
          <a href="#contact">
            <span className="font-bold">Get Started</span>
          </a>
        </button>
      </div>

      {/* Mobile Menu: Smooth opening/closing with staggered buttons */}
      <div
        className={`md:hidden transition-all duration-1000 ease-in-out transform ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col items-center mt-8 space-y-4">
          <ul className="space-y-4 text-lg text-center pt-2">
            <li
              className={`transition-opacity duration-1000 ease-in-out transform ${
                isOpen ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 -translate-y-5'
              }`}
            >
              <a 
                href="#features" 
                onClick={handleMenuItemClick}  // Close menu on click
                className="text-gray-800 hover:bg-[#FFA900] hover:text-white px-4 py-2 rounded-full transition-transform duration-700 transform hover:scale-105 hover:shadow-lg"
              >
                Features
              </a>
            </li>
            <li
              className={`transition-opacity duration-1000 ease-in-out transform ${
                isOpen ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 -translate-y-5'
              }`}
            >
              <a 
                href="#solutions" 
                onClick={handleMenuItemClick}  // Close menu on click
                className="text-gray-800 hover:bg-[#FFA900] hover:text-white px-4 py-2 rounded-full transition-transform duration-700 transform hover:scale-105 hover:shadow-lg"
              >
                Solutions
              </a>
            </li>
            <li
              className={`transition-opacity duration-1000 ease-in-out transform ${
                isOpen ? 'opacity-100 translate-y-0 delay-400' : 'opacity-0 -translate-y-5'
              }`}
            >
              <a 
                href="#support" 
                onClick={handleMenuItemClick}  // Close menu on click
                className="text-gray-800 hover:bg-[#FFA900] hover:text-white px-4 py-2 rounded-full transition-transform duration-700 transform hover:scale-105 hover:shadow-lg"
              >
                Support
              </a>
            </li>
            <li
              className={`transition-opacity duration-1000 ease-in-out transform ${
                isOpen ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 -translate-y-5'
              }`}
            >
              <a 
                href="#contact" 
                onClick={handleMenuItemClick}  // Close menu on click
                className="text-gray-800 hover:bg-[#FFA900] hover:text-white px-4 py-2 rounded-full transition-transform duration-700 transform hover:scale-105 hover:shadow-lg"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Separate 'Get Started' button with its own transition */}
          <button 
            className={`mt-6 border-2 border-[#FFA900] text-[#FFA900] px-6 py-2 rounded-full hover:bg-[#FFA900] hover:text-white transition-opacity duration-1000 ease-in-out transform ${
              isOpen ? 'opacity-100 translate-y-0 delay-600' : 'opacity-0 -translate-y-5'
            }`}
            onClick={handleMenuItemClick}  // Close menu and handle navigation
          >
            <a href="#contact">
              <span className="font-bold">Get Started</span>
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
