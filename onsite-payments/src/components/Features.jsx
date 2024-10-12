import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Onsite Payments?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">0% Processing Fees</h3>
            <p>Keep more of your earnings with no hidden fees. Get the best value with every transaction.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Free Clover Equipment</h3>
            <p>Receive cutting-edge Clover payment terminals for free, giving you secure and efficient processing.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">24/7 Customer Support</h3>
            <p>Day or night, our support team ensures that your business keeps running smoothly without interruptions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
