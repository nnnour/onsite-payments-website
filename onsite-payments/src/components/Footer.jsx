import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p>© 2024 Onsite Payments. All rights reserved.</p>
        <p className="mt-4">
          Follow us on:
          <a href="#" className="text-green-500 ml-2">Facebook</a>,
          <a href="#" className="text-green-500 ml-2">Twitter</a>,
          <a href="#" className="text-green-500 ml-2">Instagram</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
