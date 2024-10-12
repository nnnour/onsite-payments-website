import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 h-screen flex items-center justify-center text-white">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-6">Power Your Business with Free Clover Equipment!</h1>
        <p className="text-xl mb-8">
          0% Processing Fees | Free Clover Terminals | 24/7 Customer Support
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Learn More
          </button>
          <button className="bg-white text-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
