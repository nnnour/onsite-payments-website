import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-green-500">Onsite Payments</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="text-gray-800 hover:text-green-500">Features</a></li>
            <li><a href="#solutions" className="text-gray-800 hover:text-green-500">Solutions</a></li>
            <li><a href="#support" className="text-gray-800 hover:text-green-500">Support</a></li> {/* Add Support link */}
            <li><a href="#testimonials" className="text-gray-800 hover:text-green-500">Testimonials</a></li>
            <li><a href="#contact" className="text-gray-800 hover:text-green-500">Contact</a></li>
          </ul>
        </nav>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg">Get Started</button>
      </div>
    </header>
  );
}

export default Header;
