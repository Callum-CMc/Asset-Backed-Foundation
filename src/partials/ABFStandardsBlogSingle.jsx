import React from 'react';

import HeroBg from '../images/hero-bg.jpg';
import AuthorImage from '../images/news-author-01.jpg';
import NewsImage01 from '../images/news-inner-image.jpg';
import NewsImage02 from '../images/news-inner-image-left.jpg';

function ABFStandardsBlogSingle() {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content">
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">

            <article>

              {/* Article header */}
              <header className="mb-8">
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <h2 className="h1 font-red-hat-display mb-4" data-aos="fade-down">Asset Backed Standards</h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
                  The initial proposal is for 6 core standards (additional 2 pending) with each core standard consisting of competencies. These standards/competencies shall be reviewed at a regular basis. Prior warning of any changes to the standards will be made on this website giving at least 3 months notice. Support is available to help projects throughout the process.
                    </p>
                                </div>
                {/* Article meta */}
                <div className="md:flex md:items-center md:justify-between mt-5">

                </div>
              </header>
              <hr className="w-5 h-px pt-px bg-gray-400 dark:bg-gray-500 border-0 mb-8" data-aos="fade-down" data-aos-delay="450" />

              {/* Article content */}
              <div className="text-lg text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="450">
                <p className="mb-8">
                <strong>Tier I</strong> requires the submission of The ABF 2023 Standards questionnaire with appropriate proof attached/ linked to. Verification will conducted by ABF auditors and certification will only be awarded when sufficient evidence is shown.                </p>
                <p className="mb-8">
                <strong> Tier II </strong> is an expansion on Tier I requirements with the addition of virtual/ in person audit to verify key aspects of the submission may be required. Tier I needs to be awarded first.                  </p>

                <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
                Please Note: The Asset Backed Foundation Standards Tier I questionnaire is under development. When completed it will be available on this page as an .xls download. The questionnaire will outline in specific details what required each of the category and allow for the certification.
                  </p>


              </div>

            </article>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ABFStandardsBlogSingle;
