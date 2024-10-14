import React from 'react';
import NewsEventsMain from './../NEWSEVENTS/NewsEventsMain';

import SecondBanner from '../BannerPage/SecondBanner';
import HeadNavBar from '../../HEADER/HeadNavBar';
import Footer from '../../FOOTER/Footer';

const NewsEvents = () => {

  return (
    <>
    <HeadNavBar />
    <NewsEventsMain />
    <SecondBanner />
    <Footer />
    </>
  );
};

export default NewsEvents;
