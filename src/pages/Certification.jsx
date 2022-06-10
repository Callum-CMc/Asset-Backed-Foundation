import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHelp from '../partials/HeroHelp';

import ABFProcess from '../partials/ABFProcess';

import Footer from '../partials/Footer';

function Certification() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}

        <ABFProcess />



      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Certification;
