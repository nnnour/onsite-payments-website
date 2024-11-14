import React from 'react';
import creditCardImage from '../assets/creditcard.png';
import { motion } from 'framer-motion';
import './SolutionSection.css';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2, // Slower animation
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0 } }, // Slower animation
};

const SolutionSection = () => {
  return (
    <section id="solutions" className="py-16 bg-white px-4"> {/* Added horizontal padding */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Side: Floating Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={creditCardImage}
            alt="Clover Equipment"
            className="w-3/4 object-contain floating-image"
          />
        </div>

        {/* Right Side: Animated Text Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 relative title-underline"
            variants={itemVariants}
          >
            Free Clover Equipment
          </motion.h2>

          <motion.p className="text-lg mb-6 text-gray-700" variants={itemVariants}>
            <strong>Enhance your business</strong> with our complimentary Clover terminals, designed for seamless and secure payment processing. Your package includes:
          </motion.p>

          <motion.ul className="list-none text-lg text-gray-800 space-y-4" variants={itemVariants}>
            <motion.li className="flex items-start" variants={itemVariants}>
              <span className="text-[#8EC221] text-2xl mr-3">✓</span>
              <span><strong>Clover Station:</strong> Advanced terminal with built-in camera, barcode scanner, and versatile card reader.</span>
            </motion.li>
            <motion.li className="flex items-start" variants={itemVariants}>
              <span className="text-[#8EC221] text-2xl mr-3">✓</span>
              <span><strong>Thumb Print Log-in:</strong> Secure and fast user verification to enhance security.</span>
            </motion.li>
            <motion.li className="flex items-start" variants={itemVariants}>
              <span className="text-[#8EC221] text-2xl mr-3">✓</span>
              <span><strong>Cash Drawer:</strong> Keep your transactions safe with secure cash storage.</span>
            </motion.li>
            <motion.li className="flex items-start" variants={itemVariants}>
              <span className="text-[#8EC221] text-2xl mr-3">✓</span>
              <span><strong>Receipt Printer:</strong> Deliver fast, accurate receipts for an enhanced customer experience.</span>
            </motion.li>
          </motion.ul>

          <motion.p className="text-lg mt-6 text-gray-700" variants={itemVariants}>
            Built with user-friendly touchscreens and <span className="font-bold text-[#FFA900]">real-time reporting</span>, Clover terminals integrate seamlessly into your operations, helping your business thrive.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default SolutionSection;
