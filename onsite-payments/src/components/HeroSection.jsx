import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 h-screen flex items-center justify-center text-white px-4">
      <div
        className={`text-center max-w-2xl transition-all duration-[2000ms] ease-in-out transform ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
        }`}
      >
        {/* Title with slower animation */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-transform duration-[2000ms] ease-in-out transform hover:scale-110">
          Power Your Business with Free Clover Equipment!
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8 transition-opacity duration-[2000ms] ease-in-out hover:opacity-80">
          0% Processing Fees | Free Clover Terminals | 24/7 Customer Support
        </p>

        {/* Buttons with navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToSection('features')}
            className="bg-white text-green-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
          >
            Learn More
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-green-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
