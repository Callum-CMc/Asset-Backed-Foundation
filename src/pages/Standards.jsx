import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHelp from '../partials/HeroHelp';

import ABFStandardsTabs from '../partials/ABFStandardsTabs';
import ABFStandardsBlogSingle from '../partials/ABFStandardsBlogSingle';

import Footer from '../partials/Footer';

function Standards() {
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
        <ABFStandardsBlogSingle />
        <ABFStandardsTabs />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Standards;
