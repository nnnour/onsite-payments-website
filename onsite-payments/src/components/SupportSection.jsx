import React from 'react';

const SupportSection = () => {
  return (
    <section id="support" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Support and Investment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">24/7 Customer Service</h3>
            <p>We are here for you around the clock to ensure that your business runs smoothly without any hiccups.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Capital Investments</h3>
            <p>Grow your business with our capital investment opportunities after just a few months of processing with us.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
