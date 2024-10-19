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
              <a href="#features" onClick={handleMenuItemClick} className="text-gray-800 hover:bg-[#FFA900] hover:text-white px-4 py-2 rounded-full transition-colors duration-300">Features</a>
            </li>
            <li>
              <a href="#solutions" onClick={handleMenuItemClick} className="text-gray-800 hover:bg-[#FFA900] hover:text-white px-4 py-2 rounded-full transition-colors duration-300">Solutions</a>
            </li>
            <li>
              <a href="#support" onClick={handleMenuItemClick} className="text-gray-800 hover:bg-[#FFA900] hover:text-white px-4 py-2 rounded-full transition-colors duration-300">Support</a>
            </li>
            <li>
              <a href="#contact" onClick={handleMenuItemClick} className="text-gray-800 hover:bg-[#FFA900] hover:text-white px-4 py-2 rounded-full transition-colors duration-300">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Get Started Button (visible on large screens) */}
        <button className="hidden md:block border-2 border-[#FFA900] text-[#FFA900] px-6 py-2 rounded-full hover:bg-[#FFA900] hover:text-white transition-colors duration-300 ml-6">
          <span className="font-bold">Get Started</span>
        </button>
      </div>

      {/* Mobile Menu: Align buttons vertically when screen is small */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-8 space-y-4 max-h-72 overflow-auto">  {/* Limit height */}
          <ul className="space-y-4 text-lg text-center pt-2">  {/* Added padding-top to ul */}
            <li>
              <a 
                href="#features" 
                onClick={handleMenuItemClick}  // Close menu on click
                className="text-gray-800 hover:bg-[#FFA900] hover:text-white px-4 py-2 rounded-full transition-colors duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#solutions" 
                onClick={handleMenuItemClick}  // Close menu on click
                className="text-gray-800 hover:bg-[#FFA900] hover:text-white px-4 py-2 rounded-full transition-colors duration-300"
              >
                Solutions
              </a>
            </li>
            <li>
              <a 
                href="#support" 
                onClick={handleMenuItemClick}  // Close menu on click
                className="text-gray-800 hover:bg-[#FFA900] hover:text-white px-4 py-2 rounded-full transition-colors duration-300"
              >
                Support
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={handleMenuItemClick}  // Close menu on click
                className="text-gray-800 hover:bg-[#FFA900] hover:text-white px-4 py-2 rounded-full transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="mt-6 border-2 border-[#FFA900] text-[#FFA900] px-6 py-2 rounded-full hover:bg-[#FFA900] hover:text-white transition-colors duration-300">
            <span className="font-bold">Get Started</span>
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
