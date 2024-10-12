import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Get in Touch with Us</h2>
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block mb-2 text-gray-600 font-semibold" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-600 font-semibold" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-600 font-semibold" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="Enter subject"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-600 font-semibold" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
