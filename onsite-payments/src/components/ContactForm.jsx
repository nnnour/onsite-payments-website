import React, { useState } from 'react';
import { motion } from 'framer-motion';

const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
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
      duration: 1.5,
      ease: 'easeOut',
    },
  },
};

const ContactForm = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const phonePattern = /^[0-9]*$/;

    if (!formData.name) newErrors.name = 'Please complete this field.';
    if (!formData.subject) newErrors.subject = 'Please complete this field.';
    if (!formData.email) {
      newErrors.email = 'Please complete this field.';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!formData.phone) {
      newErrors.phone = 'Please complete this field.';
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = 'Phone number must only contain numbers.';
    }
    if (!formData.message) newErrors.message = 'Please complete this field.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            <span className="block mx-auto w-[100%] h-1 mt-2 bg-[#FFA900] rounded-full"></span>
          </h2>
        </motion.div>

        {/* Animated Contact Form */}
        <motion.div
          className="max-w-lg mx-auto bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#8EC221] shadow-lg transition-shadow duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={formVariants}
        >
          <form
            action="https://getform.io/f/byvvyoxa"
            method="POST"
            noValidate
            onSubmit={(e) => {
              if (!validateForm()) {
                e.preventDefault();
              }
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block mb-2 text-gray-600 font-semibold" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8EC221]"
                  placeholder="Enter your name"
                  required
                />
                {errors.name && <small className="text-red-600">{errors.name}</small>}
              </div>
              <div>
                <label className="block mb-2 text-gray-600 font-semibold" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8EC221]"
                  placeholder="Enter subject"
                  required
                />
                {errors.subject && <small className="text-red-600">{errors.subject}</small>}
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-600 font-semibold" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8EC221]"
                placeholder="Enter your email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
              />
              {errors.email && <small className="text-red-600">{errors.email}</small>}
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-600 font-semibold" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8EC221]"
                placeholder="Enter your phone number"
                required
                pattern="\d*"
                title="Phone number must only contain numbers"
              />
              {errors.phone && <small className="text-red-600">{errors.phone}</small>}
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-600 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8EC221]"
                rows="5"
                placeholder="Enter your message"
                required
              ></textarea>
              {errors.message && <small className="text-red-600">{errors.message}</small>}
            </div>
            <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
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
