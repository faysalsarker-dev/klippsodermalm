// components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        {/* Message Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-semibold text-primary mb-6">About Us</h2>
          <p className="text-xl  mb-8">
            At <strong className="text-primary">[Barber Shop Name]</strong>, we believe that every cut is a masterpiece and every visit is an experience. With over [X] years of service in [City/Neighborhood], we’ve been crafting styles and perfecting grooming techniques for all of our clients.
          </p>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold ">Why Choose Us?</h3>
            <ul className="list-disc pl-5 ">
             
              <li><strong>Top-Quality Products:</strong> We only use premium grooming products for the best results.</li>
              <li><strong>Customer Satisfaction:</strong> Your happiness is our top priority—we listen to your needs.</li>
            </ul>
          </div>
          <div className="mt-8">
            <button className="btn btn-primary">Book an Appointment</button>
          </div>
        </div>

        {/* Image Section with Clip-Path */}
        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <div className="clip-path-container">
            <img 
              src="/hero.jpg" 
              alt="Barber Shop Interior" 
              className="w-full h-full object-cover rounded-lg clip-path-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
