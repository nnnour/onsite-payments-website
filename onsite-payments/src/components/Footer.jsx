import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center space-y-4">
        {/* Company Information */}
        <p className="text-sm">
          © {new Date().getFullYear()} Onsite Payments. All Rights Reserved.
        </p>
        
        {/* Contact Information */}
        <p className="text-sm">
          For inquiries, please use the form above to contact us.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
