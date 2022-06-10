import React from 'react';
import { Link } from 'react-router-dom';


function HeroABFAbout() {
  return (
    <section className="relative">
      {/* Background gradient (light version only) */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-white pointer-events-none dark:hidden" aria-hidden="true"></div>
      {/* End background gradient (light version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-red-hat-display mb-4" data-aos="fade-down">About the Asset Backed Foundation</h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">Please Note: This website is in the concept phase and subject to change</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroABFAbout;
