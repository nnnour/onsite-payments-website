import React from 'react';
import { FaMoneyBillWave, FaRegCreditCard, FaHeadset, FaConnectdevelop, FaChartLine } from 'react-icons/fa';

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12 text-gray-800">Why Choose Onsite Payments?</h2>
        
        {/* Updated Responsive Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          
          {/* Card 1 - 0% Processing Fees */}
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaMoneyBillWave className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">0% Processing Fees</h3>
            <p className="text-gray-600">Keep 100% of your earnings with Onsite Payments. No hidden fees, just pure profit for your business.</p>
          </div>
          
          {/* Card 2 - Free Clover Equipment */}
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaRegCreditCard className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Free Clover Equipment</h3>
            <p className="text-gray-600">Receive Clover's top-tier payment terminals for free, enabling secure and efficient transactions from day one.</p>
          </div>

          {/* Card 3 - 24/7 Customer Support */}
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaHeadset className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">24/7 Customer Support</h3>
            <p className="text-gray-600">Our team is always available to support your business, ensuring smooth operation with no downtime.</p>
          </div>

          {/* Card 4 - Seamless Integration */}
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaConnectdevelop className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Seamless Integration</h3>
            <p className="text-gray-600">Onsite Payments integrates effortlessly with platforms like DoorDash, Uber Eats, and GrubHub, keeping your operations connected and running smoothly.</p>
          </div>

          {/* Card 5 - Capital Investments */}
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaChartLine className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Capital Investments</h3>
            <p className="text-gray-600">After a few months of processing with Onsite Payments, your business may qualify for capital investments to help you grow even further.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;
