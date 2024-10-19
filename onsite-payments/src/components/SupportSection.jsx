import React from 'react';

const SupportSection = () => {
  return (
    <section id="support" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Support & Investment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">24/7 Customer Support</h3>
            <p>Our team is available around the clock to ensure your business runs smoothly, no matter what.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Capital Investments</h3>
            <p>After a few months of processing with Onsite Payments, your business may qualify for capital investments to help you grow even further.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
