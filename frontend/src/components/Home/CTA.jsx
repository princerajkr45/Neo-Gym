import React from 'react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white text-center">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-4 sm:text-5xl leading-tight tracking-tight">
          Ready to Begin Your Fitness Journey?
        </h2>
        
        {/* Subheading */}
        <p className="text-lg sm:text-xl mb-10 text-opacity-85">
          Join our community today and take your fitness to the next level. Start building a healthier, stronger you.
        </p>

        {/* Call to Action Button */}
        <button className="bg-transparent border-2 border-white text-lg py-3 px-8 rounded-full text-white hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
