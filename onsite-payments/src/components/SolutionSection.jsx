import React from 'react';

const SolutionSection = () => {
  return (
    <section id="solutions" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Free Clover Equipment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src="/path-to-clover-equipment-image.jpg" alt="Clover Equipment" className="w-full" /> {/* Placeholder for the image */}
          <div>
            <p className="text-xl mb-6">With Onsite Payments, you'll receive free Clover terminals for easy and secure payment processing. This includes:</p>
            <ul className="text-left ml-4">
              <li>• Clover Station: Built-in camera, barcode scanner, and swipe/dip credit card reader.</li>
              <li>• Thumb Print Log-in Reader: Enhances security and provides user verification.</li>
              <li>• Cash Drawer: For secure storage of cash during transactions.</li>
              <li>• Receipt Printer: Ensures fast and accurate receipts for customers.</li>
            </ul>
            <p className="text-xl mt-6">Clover terminals are designed for ease of use, touchscreens, real-time reporting, and more.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
