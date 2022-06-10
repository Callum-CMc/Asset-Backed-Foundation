import React from 'react';


import NewsImage01 from '../images/block.jpg';
import NewsImage02 from '../images/network.jpg';

function ABFBlogSingle() {
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
                  <h2 className="h1 font-red-hat-display mb-4" data-aos="fade-down">About</h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
Non-Fungible Tokens (NFTs) consist of digital data stored on the blockchain with ownership attributed to a blockchain address. Characteristics of the NFT can be encoded permanently at creation to reference digital files, allow for transfer of ownership and limit the number created.</p>
                </div>
                {/* Article meta */}
                <div className="md:flex md:items-center md:justify-between mt-5">

                </div>
              </header>
              <hr className="w-5 h-px pt-px bg-gray-400 dark:bg-gray-500 border-0 mb-8" data-aos="fade-down" data-aos-delay="450" />

              {/* Article content */}
              <div className="text-lg text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="450">
                <p className="mb-8">
                NFTs have been a part of the blockchain ecosystem since 2014, initially being used a virtual trading cards. Since then, the discussion of a multitude of potential use cases has been ever present.
                </p>
                <p className="mb-8">
                  They have been a part of the blockchain ecosystem since 2014, initially being used a virtual trading cards. Since then, the discussion of a multitude of potential use cases has been ever present.
                  </p>
                <figure className="mb-8">
                  <img className="w-full" src={NewsImage01} width="768" height="432" alt="News inner" />
                </figure>
                <h3 className="h4 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">Physical Backed NFTs</h3>
                <p className="mb-8">
                One such use case is using NFTs to represent the purchase and ownership of physical goods similar to a Certificate of Title/ Deed. The blockchain allowing a level of transparency of purchase, transfer and virtual ownership of the asset not seen before.
                </p>
                <p className="mb-8">

                An example of this would be a gold bar represented by an NFT. While the physical asset being stored in a secure vault by an NFT project.
                </p>

                <h3 className="h4 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">The Issue</h3>
                <figure className="mb-8 md:float-left md:max-w-sm md:mr-8 lg:max-w-none lg:-ml-32">
                  <img className="mx-auto" src={NewsImage02} width="480" height="300" alt="News inner left" />
                </figure>
                <p className="mb-8">
              The decentralised nature of the blockchain allows for anonymous individuals to create nefarious projects and access an audience with few hurdles. This causes susceptible individuals to lose potentially significant amounts of money and time in advocating fraudulent projects. The impact of a single projects fallout can lead to backlash from the media, the industries they operate in and the general public. And rightly so
                </p>

                <p className="mb-8">
                  The credibility of all Asset Backed NFTs is tied to the success of all projects operating within the space. Each Asset Backed NFT project has accountability to do and be better to protect holders.
                </p>

                <h3 className="h4 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">The Proposal</h3>
                <p className="mb-8">
                Aligning asset backed NFT projects towards suitable, non-subjective standards allows for greater ownership and transparency to ultimately benefit the individuals that wish to engage in the Asset Backed NFT market. While Standards are not a guarantee of safety or security, they just identify what steps have been taken to reduce risk.
                </p>
                <p className="mb-8">
                The proposed categories of are assessment are*
                </p>

                <ul className="list-decimal list-inside mb-8">
                  <li><strong className="font-medium text-gray-900 dark:text-gray-100">Project Credibility</strong></li>
                  <li><strong className="font-medium text-gray-900 dark:text-gray-100">Financial Protection</strong></li>
                  <li><strong className="font-medium text-gray-900 dark:text-gray-100">Data Protection</strong></li>
                  <li><strong className="font-medium text-gray-900 dark:text-gray-100">Code Security</strong></li>
                  <li><strong className="font-medium text-gray-900 dark:text-gray-100">Asset Protection</strong></li>
                  <li><strong className="font-medium text-gray-900 dark:text-gray-100">Insolvency Protection</strong></li>
                  <li><strong className="font-medium text-gray-900 dark:text-gray-100">Compliance</strong>**</li>
                  <li><strong className="font-medium text-gray-900 dark:text-gray-100">Environmental</strong>**</li>

                </ul>
                <p className="mb-8">
                *subject to change
                </p>

                <p className="mb-8">
                **Further research required on applicable standards
                </p>

                  <p className="mb-8">
                For further information, comment or feedback please contact @Callum_CMc on twitter
                  </p>
                  <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2">
                    <span> <a href="https://twitter.com/Callum_CMc" target="_blank" rel="noopener noreferrer">Callum_CMc Twitter</a></span>
                    <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                    </svg>
                  </a>
                  <br />
                  <br />

                <h3 className="h4 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">Disclosure</h3>
                <p className="mb-8">
                This is currently ran and funded by a single individual being worked on in my free time. I have multiple years experience in industrial and utility scale application development with significant familiarity to the strict cyber security standards  (ISO 270001, IEC62443, CSA STAR, SOC II ect...) in place to protect countries, companies and end users.

                </p>

                <p className="mb-8">
                I am a holder of asset backed NFTs but I am not paid (nor have ever been paid) to represent any asset backed project.
                 </p>
              </div>

            </article>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ABFBlogSingle;
