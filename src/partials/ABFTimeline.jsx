import React, { useState } from 'react';

function ABFTimeline() {

  const [year, setYear] = useState('2022');

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">Aims and Timeline</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
            The aim is to improve the security, ownership and transparency to benefit users and projects within the Asset Backed NFT space.
                </p>
          </div>

          {/* Section content */}
          <div>
            <div className="flex items-start">

              {/* Timeline buttons */}
              <div className="relative mr-4 sm:mr-12 lg:mr-32">
                <div className="absolute inset-0 my-6 ml-16 pointer-events-none -z-1" aria-hidden="true">
                  <div className="absolute inset-0 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
                </div>
                <button className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setYear('2022')}>
                  <span className="block w-12 truncate">2022</span>
                  <span className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${year === '2022' && 'bg-teal-500 dark:bg-teal-500'}`}></span>
                </button>
                <button className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setYear('2023')}>
                  <span className="block w-12 truncate">2023</span>
                  <span className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${year === '2023' && 'bg-teal-500 dark:bg-teal-500'}`}></span>
                </button>
                <button className="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" onClick={() => setYear('2024')}>
                  <span className="block w-12 truncate">2024</span>
                  <span className={`block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full ${year === '2024' && 'bg-teal-500 dark:bg-teal-500'}`}></span>
                </button>
              </div>

              {/* 2020's articles */}
              <div className={`grow ${year !== '2022' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Creation of Asset Backed Standards</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Standards outlined and availble for review
                      </p>
                    </div>
                  </article>
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Feedback and Support from projects and individuals</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Initial feedback gathered from parties involved within the space</p>
                    </div>

                  </article>
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Projects Resources</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Creaton of educational resources for projects to aid in their certification</p>
                    </div>

                  </article>
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">User Resources</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Creation of educational resources for users about Asset Backed NFTs, dispelling myths and improving awareness of reducing risk.</p>
                    </div>

                  </article>

                </div>
              </div>

              {/* 20223's articles */}
              <div className={`grow ${year !== '2023' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Forum Formed</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Create Asset Backed Alliance forum for projects to engage in discussions on the standards</p>
                    </div>

                  </article>
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">User Resources</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Creation of educational resources for users about Asset Backed NFTs, dispelling myths and improving awareness of reducing risk.</p>
                    </div>

                  </article>
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">First Pledges</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>First projects pledge to work towards Asset Backed Standards</p>
                    </div>

                  </article>
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">First Certification</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>First projects reach Tier 1 Certification</p>
                    </div>

                  </article>
                </div>
              </div>

              {/* 2024's articles */}
              <div className={`grow ${year !== '2024' && 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">Exchange Engagement</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>Exchanges and auction houses to acknowledge the Asset Backed Standards and the projects associated with them</p>
                    </div>

                  </article>
                  <article className="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
                    <header>
                      <h3 className="h4 font-red-hat-display mb-1">
                        <a href="#0">First Advanced Certification</a>
                      </h3>
                    </header>
                    <div className="text-gray-600 dark:text-gray-400 grow">
                      <p>First projects reach Tier II Certification</p>
                    </div>

                  </article>
                </div>
              </div>



            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ABFTimeline;
