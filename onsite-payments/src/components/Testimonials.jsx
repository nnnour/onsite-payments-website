import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <video src="/path-to-video1.mp4" controls className="w-full" />
            <p className="mt-4">"Onsite Payments revolutionized the way we handle transactions!" - Happy Merchant</p>
          </div>
          <div>
            <video src="/path-to-video2.mp4" controls className="w-full" />
            <p className="mt-4">"We saved so much on fees thanks to Onsite Payments." - Satisfied Client</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
