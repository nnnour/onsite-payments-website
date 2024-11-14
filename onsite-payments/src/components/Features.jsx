import React from 'react';
import { FaMoneyBillWave, FaRegCreditCard, FaHeadset, FaConnectdevelop, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const Features = () => {
  return (
    <section id="features" className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">

        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <motion.div
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <FaMoneyBillWave className="text-[#8EC221] text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-[#FFA900]">0% Processing Fees</h3>
            <p className="text-gray-700">Keep 100% of your earnings with Onsite Payments. No hidden fees, just pure profit for your business.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <FaRegCreditCard className="text-[#8EC221] text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-[#FFA900]">Free Clover Equipment</h3>
            <p className="text-gray-700">Receive Clover's top-tier payment terminals for free, enabling secure and efficient transactions from day one.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <FaHeadset className="text-[#8EC221] text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-[#FFA900]">24/7 Customer Support</h3>
            <p className="text-gray-700">Our team is always available to support your business, ensuring smooth operation with no downtime.</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <FaConnectdevelop className="text-[#8EC221] text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-[#FFA900]">Seamless Integration</h3>
            <p className="text-gray-700">Onsite Payments integrates effortlessly with platforms like DoorDash, Uber Eats, and GrubHub, keeping your operations connected and running smoothly.</p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <FaChartLine className="text-[#8EC221] text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-[#FFA900]">Capital Investments</h3>
            <p className="text-gray-700">After a few months of processing with Onsite Payments, your business may qualify for capital investments to help you grow even further.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
