import React, { useState } from 'react';


function ABFStandardsTabs() {

  const [category, setCategory] = useState('1');

  return (
    <section className="relative border-t border-transparent dark:border-gray-800">
      {/* Background gradient */}
      <div className="absolute inset-0 h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none" aria-hidden="true"></div>
      {/* End background gradient */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-red-hat-display mb-4">ABF 2023 Standards</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Currently under development</p>
          </div>

          {/* Section content */}
          <div>
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-6">

              {/* Category buttons */}
              <div className="lg:col-span-1 lg:pr-16 flex flex-wrap justify-center lg:flex-col lg:justify-start -m-1 lg:mx-0">
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '1' && 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('1')}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className={`fill-current ${category === '1' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`} />
                  </svg>
                  <span className={category === '1' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Project Credibility</span>
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '2' && 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('2')}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className={`fill-current ${category === '2' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`} />
                  </svg>
                  <span className={category === '2' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Financial Protection</span>
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '3' && 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('3')}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className={`fill-current ${category === '3' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`}  />
                  </svg>
                  <span className={category === '3' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Data Protection</span>
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '4' && 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('4')}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className={`fill-current ${category === '4' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`} />
                  </svg>
                  <span className={category === '4' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Security</span>
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '5' && 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('5')}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className={`fill-current ${category === '5' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`}  />
                  </svg>
                  <span className={category === '5' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Asset Protection</span>
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '6' && 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('6')}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className={`fill-current ${category === '6' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`}  />
                  </svg>
                  <span className={category === '6' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Insolvency Protection</span>
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '7' && 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('7')}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className={`fill-current ${category === '7' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`}  />
                  </svg>
                  <span className={category === '7' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Compliance</span>
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${category === '8' && 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25'}`}
                  onClick={() => setCategory('8')}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className={`fill-current ${category === '8' ? 'text-teal-200 dark:text-teal-400' : 'text-teal-500 dark:text-gray-400'}`}  />
                  </svg>
                  <span className={category === '8' ? 'text-white dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}>Environmental</span>
                </button>

              </div>











              {/* Standards */}
              <div className="lg:col-span-2 max-w-sm mx-auto md:max-w-3xl lg:max-w-none">


              <div className={['1'].includes(category) ? undefined : 'hidden'}>

              <p className="mb-8">
              Demonstration of the legal status of the company, founders and key members (CEO, CFO ect.) through publicly available records.

              </p>
              </div>


                <div className="grid md:grid-cols-2 gap-6">


                  <div className={['1'].includes(category) ? undefined : 'hidden'}>
                    <div className="relative">
                    <h4 className="h4 font-red-hat-display mb-4">Tier I</h4>
                    <p className="mb-8">
                    Business registered publicly with details viewable in publicly available records.
                    </p>
                    </div>
                  </div>


                  <div className={['1'].includes(category) ? undefined : 'hidden'}>
                  <div className="relative">
                  <h4 className="h4 font-red-hat-display mb-4">Tier II</h4>
                  <p className="mb-8">
                  Background checks on key business individuals
                   </p>
                    </div>
                  </div>
                  </div>



                  <div className={['2'].includes(category) ? undefined : 'hidden'}>

                  <p className="mb-8">
                  Demonstration of appropriate insurance in place for the company and the assets held by company.

                  </p>
                  </div>

                    <div className="grid md:grid-cols-2 gap-6">

                      <div className={['2'].includes(category) ? undefined : 'hidden'}>
                        <div className="relative">
                        <h4 className="h4 font-red-hat-display mb-4">Tier I</h4>
                        <p className="mb-8">
                        Public liability insurance certificate
                        </p>
                        </div>
                      </div>

                      <div className={['2'].includes(category) ? undefined : 'hidden'}>
                      <div className="relative">
                      <h4 className="h4 font-red-hat-display mb-4">Tier II</h4>
                      <p className="mb-8">
                      Under development
                       </p>
                       </div>
                       </div>
                       </div>




                       <div className={['3'].includes(category) ? undefined : 'hidden'}>

                       <p className="mb-8">
                       Demonstration of secure of data management. ISO 27001 is the internationally recognised standard for information security management. Further information on the standard can be found -
                        <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2">
                       <a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" rel="noopener noreferrer"> here</a> </a>.
                       </p>
                       </div>

                         <div className="grid md:grid-cols-2 gap-6">
                           <div className={['3'].includes(category) ? undefined : 'hidden'}>
                             <div className="relative">

                             <h4 className="h4 font-red-hat-display mb-4">Tier I</h4>
                             <p className="mb-8">
                             ISO27001 ISMS fully implemented
                             </p>
                             </div>
                           </div>

                           <div className={['3'].includes(category) ? undefined : 'hidden'}>
                           <div className="relative">
                           <h4 className="h4 font-red-hat-display mb-4">Tier II</h4>
                           <p className="mb-8">
                           ISO 27001 certification
                            </p>
                            </div>
                            </div>
                            </div>




                            <div className={['4'].includes(category) ? undefined : 'hidden'}>

                            <p className="mb-8">

                             The security standard relates to both the smart contract the NFT is created in as well as the projects cyber security practices. The smart contract shall need to be routinely assessed to any known vulnerabilities.
                             Further information on the  CSA STAR level 1 accreditation is available -
                             <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2">
                             <a href="https://cloudsecurityalliance.org/star/" target="_blank" rel="noopener noreferrer"> here</a> </a>.

                            </p>
                            </div>

                              <div className="grid md:grid-cols-2 gap-6">
                                <div className={['4'].includes(category) ? undefined : 'hidden'}>
                                  <div className="relative">

                                  <h4 className="h4 font-red-hat-display mb-4">Tier I</h4>
                                  <p className="mb-8">
                                  Smart contract code audited by reputable auditor*
                                  </p>
                                  <p className="mb-8">
                                  *method to remove subjectivity in progress – currently based on reputation within developer community
                                  </p>
                                  </div>
                                </div>

                                <div className={['4'].includes(category) ? undefined : 'hidden'}>
                                <div className="relative">
                                <h4 className="h4 font-red-hat-display mb-4">Tier II</h4>
                                <p className="mb-8">
                                CSA STAR level 1 accreditation
                                 </p>
                                 </div>
                                 </div>
                                 </div>



                                 <div className={['5'].includes(category) ? undefined : 'hidden'}>

                                 <p className="mb-8">

                                  As the asset is stored in a physical space an assessment of the storage is required to make sure the asset is as secure as possible.

                                 </p>
                                 </div>

                                   <div className="grid md:grid-cols-2 gap-6">
                                     <div className={['5'].includes(category) ? undefined : 'hidden'}>
                                       <div className="relative">

                                       <h4 className="h4 font-red-hat-display mb-4">Tier I</h4>
                                       <p className="mb-8">
                                       Outline of basic storage details (location*, environment) and ISO 27001 Annex A.11: Physical & Environmental Security outlined
                                       </p>

                                       <p className="mb-8">
                                       *storage location will not be publicly shared due to security through obscurity observations
                                       </p>
                                       </div>
                                     </div>

                                     <div className={['5'].includes(category) ? undefined : 'hidden'}>
                                     <div className="relative">
                                     <h4 className="h4 font-red-hat-display mb-4">Tier II</h4>
                                     <p className="mb-8">
                                    ISO27001 certification. Annex A.11: Physical & Environmental Security process verified in certification
                                      </p>
                                      </div>
                                      </div>
                                      </div>




                                      <div className={['6'].includes(category) ? undefined : 'hidden'}>

                                      <p className="mb-8">

                                       If the company/ project is unable to continue operation for whatever reason, plans should be in place for users to retain/ redeem their asset.

                                      </p>
                                      </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                          <div className={['6'].includes(category) ? undefined : 'hidden'}>
                                            <div className="relative">

                                            <h4 className="h4 font-red-hat-display mb-4">Tier I</h4>
                                            <p className="mb-8">
                                            Plan publicly outlined for what will happen to the backed assets if the company
                                            </p>

                                            </div>
                                          </div>

                                          <div className={['6'].includes(category) ? undefined : 'hidden'}>
                                          <div className="relative">
                                          <h4 className="h4 font-red-hat-display mb-4">Tier II</h4>
                                          <p className="mb-8">
                                         Insolvency/ 10-Q Disclosure outlined and legally verified
                                           </p>
                                           </div>
                                           </div>
                                           </div>



                                           <div className={['7'].includes(category) ? undefined : 'hidden'}>

                                           <p className="mb-8">

                                            The company/ project must comply with local laws relating to the asset. Further investigation is under way on the method(s) of assessing this.

                                           </p>
                                           </div>

                                             <div className="grid md:grid-cols-2 gap-6">
                                               <div className={['7'].includes(category) ? undefined : 'hidden'}>
                                                 <div className="relative">

                                                 <h4 className="h4 font-red-hat-display mb-4">Tier I</h4>
                                                 <p className="mb-8">
                                                 Under development
                                                 </p>

                                                 </div>
                                               </div>

                                               <div className={['7'].includes(category) ? undefined : 'hidden'}>
                                               <div className="relative">
                                               <h4 className="h4 font-red-hat-display mb-4">Tier II</h4>
                                               <p className="mb-8">
                                               Under development
                                                </p>
                                                </div>
                                                </div>
                                                </div>


                                                <div className={['8'].includes(category) ? undefined : 'hidden'}>

                                                <p className="mb-8">

                                                 The companies/ projects environmental impact should be understood and steps taken to reduce it.

                                                 Further investigation is under way on the method(s) of assessing this.


                                                </p>
                                                </div>

                                                  <div className="grid md:grid-cols-2 gap-6">
                                                    <div className={['8'].includes(category) ? undefined : 'hidden'}>
                                                      <div className="relative">

                                                      <h4 className="h4 font-red-hat-display mb-4">Tier I</h4>
                                                      <p className="mb-8">
                                                      Under development
                                                      </p>

                                                      </div>
                                                    </div>

                                                    <div className={['8'].includes(category) ? undefined : 'hidden'}>
                                                    <div className="relative">
                                                    <h4 className="h4 font-red-hat-display mb-4">Tier II</h4>
                                                    <p className="mb-8">
                                                    Under development
                                                     </p>
                                                     </div>
                                                     </div>
                                                     </div>


                       </div>
                       </div>


                       </div>




        </div>
      </div>
    </section>
  );
}

export default ABFStandardsTabs;
