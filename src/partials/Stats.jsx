import React from 'react';

function Stats() {
  return (
    <section className="relative">
      {/* Background gradient (light version only) */}
      <div className="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden" aria-hidden="true"></div>
      {/* End background gradient (light version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-4 text-center" data-aos-id-stats>
            {/* 1st item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]">
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">$283BM</div>
              <div className="text-gray-600 dark:text-gray-400">Annual Luxury goods market (2021)</div>
            </div>
            {/* 2nd item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="100">
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">$40B</div>
              <div className="text-gray-600 dark:text-gray-400">Annual NFT market (2021)</div>
            </div>
            {/* 3rd item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="200">
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">5M+</div>
              <div className="text-gray-600 dark:text-gray-400">Items sold for over $1000 on OpenSea.io (05/2022)</div>
            </div>
            {/* 4th item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="300">
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">$52M</div>
              <div className="text-gray-600 dark:text-gray-400">NFT related crime/ fraud in Q1 2022 alone</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
