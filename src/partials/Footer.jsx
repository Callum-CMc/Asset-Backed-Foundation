import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
<footer className="relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px">





            {/* Bottom area */}
            <div className="md:flex md:items-center md:justify-between">

                {/* Social links */}
                <ul className="flex mb-4 md:order-2 md:ml-4 md:mb-0">


                </ul>


                {/* Copyrights note */}
                <div className="text-gray-600 dark:text-gray-400 text-sm mr-4">&copy; 2022 All rights reserved.</div>




                <div className="text-gray-600 dark:text-gray-400 text-sm mr-4">  ABF certification is not a guarantee of safety or security. It is just identifying what steps have been taken by projects to reduce risk.
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mr-4">
              For further information, comment or feedback please contact <a className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2">
                 <a href="https://twitter.com/Callum_CMc" target="_blank" rel="noopener noreferrer">@Callum_CMc on Twitter</a>
              </a>
                </p>
            </div>

        </div>
    </div>
</footer>
  );
}

export default Footer;
