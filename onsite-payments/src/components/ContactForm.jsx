import React from 'react';
import { motion } from 'framer-motion';

const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5, // Slower duration for smoother transition
      ease: 'easeOut',
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5, // Slower duration for smoother transition
      ease: 'easeOut',
    },
  },
};

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Animated Title */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
        >
          <h2 className="text-3xl sm:text-3xl md:text-3xl font-extrabold text-gray-800 relative inline-block">
            Get in Touch with Us
            <span className="block mx-auto w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] h-1 mt-2 bg-[#FFA900] rounded-full"></span>
          </h2>
        </motion.div>

        {/* Animated Contact Form */}
        <motion.div
          className="max-w-lg mx-auto bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#8EC221] shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition-shadow duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={formVariants}
        >
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block mb-2 text-gray-600 font-semibold" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8EC221]"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-600 font-semibold" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8EC221]"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-600 font-semibold" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8EC221]"
                placeholder="Enter subject"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-600 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8EC221]"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#8EC221] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
