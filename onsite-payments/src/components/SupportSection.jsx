import React from 'react';
import { FaHandsHelping, FaSeedling } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation variants for smooth and continuous scroll effect
const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier easing
    },
  }),
};

const SupportSection = () => {
  return (
    <section id="support" className="py-16 px-4" style={{ backgroundColor: '#C7F2A4' }}> {/* Lightened Green Background */}
      <div className="container mx-auto text-center">

        {/* Content Grid with Smooth Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Card 1 - Personalized Assistance */}
          <motion.div
            className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform transition-transform duration-500 ease-out"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="flex justify-center mb-4">
              <FaHandsHelping className="text-[#8EC221] text-5xl md:text-6xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#8EC221]">Personalized Assistance</h3>
            <p className="text-gray-800 text-base md:text-lg">
              Enjoy <span className="font-semibold text-[#FFA900]">24/7 dedicated support</span> to ensure smooth operations and address your business needs promptly.
            </p>
          </motion.div>

          {/* Card 2 - Business Growth Support */}
          <motion.div
            className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform transition-transform duration-500 ease-out"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="flex justify-center mb-4">
              <FaSeedling className="text-[#8EC221] text-5xl md:text-6xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#8EC221]">Business Growth Support</h3>
            <p className="text-gray-800 text-base md:text-lg">
              Access <span className="font-semibold text-[#FFA900]">capital resources</span> after consistent processing with us, helping your business scale effectively.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SupportSection;
