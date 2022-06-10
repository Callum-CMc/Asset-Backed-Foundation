import React from 'react';

function ABFHomeHeroHelp() {
  return (
    <section className="relative">
      {/* Background gradient (light version only) */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-white pointer-events-none dark:hidden" aria-hidden="true"></div>
      {/* End background gradient (light version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-red-hat-display mb-4" data-aos="fade-down">Asset Backed Foundation</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">Championing transparency and reducing risk within the Asset Backed NFT market. </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ABFHomeHeroHelp;
