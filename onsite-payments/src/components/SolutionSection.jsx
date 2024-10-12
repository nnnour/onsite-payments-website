import React from 'react';

const SolutionSection = () => {
  return (
    <section id="solutions" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Solutions for Growth and Flexibility</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src="/path-to-image.jpg" alt="Clover Equipment" className="w-full" />
          <div>
            <p className="text-xl mb-6">Onsite Payments provides the flexibility and tools you need to grow. Our Clover equipment is designed to streamline your operations, from touchscreens to real-time reporting.</p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
